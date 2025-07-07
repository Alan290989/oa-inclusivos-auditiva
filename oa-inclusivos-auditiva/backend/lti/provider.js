// backend/lti/provider.js - LTI 1.0/1.1 Provider
import crypto from 'crypto';
import querystring from 'querystring';
import { sequelize } from '../database/database.js';
import { OAUserProgress } from '../models/OAUserProgress.js';

class LTIProvider {
    constructor() {
        // Configuración LTI 1.0/1.1
        this.consumer_key = 'moodle-oa-dev'; // Debe coincidir con "Clave de cliente" en Moodle
        this.shared_secret = 'BK2C232t3xp5jStgNxPjgeV2'; // Debe coincidir con "Secreto compartido" en Moodle
        this.launch_url = 'http://localhost:4000/lti-launch';
    }

    // Generar signature OAuth 1.0
    generateSignature(method, url, params, consumer_secret, token_secret = '') {
        // Crear base string
        const sortedParams = Object.keys(params)
            .sort()
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            .join('&');
        
        const baseString = `${method.toUpperCase()}&${encodeURIComponent(url)}&${encodeURIComponent(sortedParams)}`;
        
        // Crear signing key
        const signingKey = `${encodeURIComponent(consumer_secret)}&${encodeURIComponent(token_secret)}`;
        
        // Generar signature
        const signature = crypto
            .createHmac('sha1', signingKey)
            .update(baseString)
            .digest('base64');
        
        return signature;
    }

    // Validar request LTI
    validateRequest(req) {
        const { body } = req;
        
        // Verificar parámetros requeridos LTI 1.0/1.1
        const requiredParams = [
            'lti_message_type',
            'lti_version',
            'resource_link_id',
            'oauth_consumer_key',
            'oauth_signature_method',
            'oauth_timestamp',
            'oauth_nonce',
            'oauth_version',
            'oauth_signature'
        ];

        for (const param of requiredParams) {
            if (!body[param]) {
                throw new Error(`Missing required parameter: ${param}`);
            }
        }

        // Verificar consumer key
        if (body.oauth_consumer_key !== this.consumer_key) {
            throw new Error('Invalid consumer key');
        }

        // Verificar versión LTI
        if (!['LTI-1p0', 'LTI-1p1'].includes(body.lti_version)) {
            throw new Error('Unsupported LTI version');
        }

        // Verificar message type
        if (body.lti_message_type !== 'basic-lti-launch-request') {
            throw new Error('Invalid message type');
        }

        // Verificar timestamp (no más de 5 minutos de diferencia)
        const now = Math.floor(Date.now() / 1000);
        const timestamp = parseInt(body.oauth_timestamp);
        if (Math.abs(now - timestamp) > 300) {
            throw new Error('Request timestamp too old');
        }

        // Preparar parámetros para signature
        const params = { ...body };
        delete params.oauth_signature; // Excluir signature del cálculo

        // Generar signature esperada
        const expectedSignature = this.generateSignature(
            'POST',
            this.launch_url,
            params,
            this.shared_secret
        );

        // Comparar signatures
        if (body.oauth_signature !== expectedSignature) {
            throw new Error('Invalid signature');
        }

        return true;
    }

    // Extraer datos del usuario y contexto
    extractLTIData(body) {
        return {
            user: {
                id: body.user_id || body.lis_person_sourcedid || 'anonymous',
                username: body.lis_person_name_given || body.lis_person_name_family || 'User',
                email: body.lis_person_contact_email_primary || '',
                full_name: body.lis_person_name_full || 'Unknown User'
            },
            context: {
                id: body.context_id || body.resource_link_id,
                title: body.context_title || 'Course',
                label: body.context_label || 'COURSE'
            },
            resource: {
                id: body.resource_link_id,
                title: body.resource_link_title || 'Resource',
                description: body.resource_link_description || ''
            },
            roles: body.roles ? body.roles.split(',') : [],
            launch_params: body
        };
    }

    // Middleware para manejar LTI launch
    getLaunchHandler() {
        return async (req, res) => {
            try {
                console.log('📝 LTI Launch recibido:', req.body);

                // Validar request
                this.validateRequest(req);
                console.log('✅ Request LTI validado');

                // Extraer datos
                const ltiData = this.extractLTIData(req.body);
                console.log('🔗 Datos LTI extraídos:', ltiData);

                // Registrar en base de datos
                try {
                    await OAUserProgress.findOrCreate({
                        where: { 
                            user_id: ltiData.user.id, 
                            oa_id: ltiData.context.id 
                        },
                        defaults: {
                            completion_status: 5,
                            progress: 0,
                            last_updated: Math.floor(Date.now() / 1000)
                        }
                    });
                    console.log('✅ Progreso del usuario registrado');
                } catch (dbError) {
                    console.error('❌ Error registrando progreso:', dbError);
                }

                // Respuesta exitosa - redirigir a la aplicación
                const redirectUrl = `http://localhost:3000/oa?user_id=${encodeURIComponent(ltiData.user.id)}&course_id=${encodeURIComponent(ltiData.context.id)}&roles=${encodeURIComponent(ltiData.roles.join(','))}`;
                
                // Enviar página HTML con redirección automática
                res.send(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>LTI Launch</title>
                        <meta charset="utf-8">
                        <style>
                            body { 
                                font-family: Arial, sans-serif; 
                                text-align: center; 
                                padding: 50px; 
                                background: #f5f5f5;
                            }
                            .container { 
                                max-width: 500px; 
                                margin: 0 auto; 
                                background: white; 
                                padding: 30px; 
                                border-radius: 10px; 
                                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                            }
                            .spinner { 
                                border: 4px solid #f3f3f3; 
                                border-top: 4px solid #3498db; 
                                border-radius: 50%; 
                                width: 40px; 
                                height: 40px; 
                                animation: spin 1s linear infinite; 
                                margin: 20px auto;
                            }
                            @keyframes spin { 
                                0% { transform: rotate(0deg); } 
                                100% { transform: rotate(360deg); } 
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h2>🎯 Acceso LTI Exitoso</h2>
                            <div class="spinner"></div>
                            <p>Redirigiendo a la aplicación...</p>
                            <p><strong>Usuario:</strong> ${ltiData.user.full_name}</p>
                            <p><strong>Curso:</strong> ${ltiData.context.title}</p>
                            <p><strong>Roles:</strong> ${ltiData.roles.join(', ')}</p>
                            <p><a href="${redirectUrl}">Continuar manualmente</a></p>
                        </div>
                        <script>
                            setTimeout(() => {
                                window.location.href = '${redirectUrl}';
                            }, 2000);
                        </script>
                    </body>
                    </html>
                `);

            } catch (error) {
                console.error('❌ Error en LTI Launch:', error);
                res.status(400).send(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>Error LTI</title>
                        <meta charset="utf-8">
                        <style>
                            body { 
                                font-family: Arial, sans-serif; 
                                text-align: center; 
                                padding: 50px; 
                                background: #f5f5f5;
                            }
                            .error { 
                                max-width: 500px; 
                                margin: 0 auto; 
                                background: #ffebee; 
                                padding: 30px; 
                                border-radius: 10px; 
                                border: 1px solid #f44336;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="error">
                            <h2>❌ Error de Acceso LTI</h2>
                            <p><strong>Error:</strong> ${error.message}</p>
                            <p>Contacta con el administrador del sistema.</p>
                        </div>
                    </body>
                    </html>
                `);
            }
        };
    }
}

export default LTIProvider;