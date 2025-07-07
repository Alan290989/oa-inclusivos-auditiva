// backend/app.js - LTI 1.0/1.1 Version
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { sequelize } from './database/database.js';
import oaRoutes from './routes/oa.routes.js';
import LTIProvider from './lti/provider.js';

const app = express();
const PORT = 4000;

const startServer = async () => {
    try {
        // Inicializar base de datos
        await sequelize.sync({ alter: true });
        console.log('✅ Base de datos sincronizada');

        // Configurar middlewares
        app.use(cors());
        app.use(morgan('dev'));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        // Inicializar LTI Provider
        const ltiProvider = new LTIProvider();
        console.log('✅ LTI Provider inicializado');

        // Ruta de salud del servidor
        app.get('/health', (req, res) => {
            res.json({
                status: 'OK',
                timestamp: new Date().toISOString(),
                lti_version: 'LTI-1p0/1p1',
                endpoint: 'http://localhost:4000/lti-launch'
            });
        });

        // ✅ RUTA LTI LAUNCH (POST)
        app.post('/lti-launch', ltiProvider.getLaunchHandler());

        // Ruta GET para testing (opcional)
        app.get('/lti-launch', (req, res) => {
            res.send(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>LTI Tool - Test</title>
                    <meta charset="utf-8">
                    <style>
                        body { 
                            font-family: Arial, sans-serif; 
                            max-width: 800px; 
                            margin: 0 auto; 
                            padding: 20px; 
                            background: #f5f5f5;
                        }
                        .info { 
                            background: white; 
                            padding: 20px; 
                            border-radius: 8px; 
                            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        }
                        .config { 
                            background: #e8f5e8; 
                            padding: 15px; 
                            border-radius: 5px; 
                            margin: 15px 0;
                        }
                        code { 
                            background: #f0f0f0; 
                            padding: 2px 5px; 
                            border-radius: 3px; 
                            font-family: monospace;
                        }
                    </style>
                </head>
                <body>
                    <div class="info">
                        <h1>🎯 LTI Tool - Objetos de Aprendizaje</h1>
                        <p><strong>Estado:</strong> ✅ Activo</p>
                        <p><strong>Versión LTI:</strong> 1.0/1.1</p>
                        <p><strong>Endpoint:</strong> <code>http://localhost:4000/lti-launch</code></p>
                        
                        <h2>📝 Configuración en Moodle:</h2>
                        <div class="config">
                            <strong>Nombre de la herramienta:</strong> OA Inclusivos (Dev)<br>
                            <strong>URL de la herramienta:</strong> <code>http://localhost:4000/lti-launch</code><br>
                            <strong>Clave de cliente:</strong> <code>moodle-oa-dev</code><br>
                            <strong>Secreto compartido:</strong> <code>BK2C232t3xp5jStgNxPjgeV2</code><br>
                            <strong>Versión LTI:</strong> LTI 1.0/1.1<br>
                            <strong>Mostrar como:</strong> Herramienta preconfigurada
                        </div>
                        
                        <h2>⚙️ Configuración recomendada:</h2>
                        <ul>
                            <li>Activar "Aceptar calificaciones desde la herramienta"</li>
                            <li>Activar "Activar compartir nombre del launcher"</li>
                            <li>Activar "Activar compartir email del launcher"</li>
                            <li>Configurar "Configuración de privacidad" según necesidades</li>
                        </ul>
                        
                        <p><em>Este endpoint solo acepta requests POST con parámetros LTI válidos.</em></p>
                    </div>
                </body>
                </html>
            `);
        });

        // Rutas API
        app.use('/api/oa', oaRoutes);

        // Ruta para testing de conexión
        app.get('/test-db', async (req, res) => {
            try {
                await sequelize.authenticate();
                res.json({
                    database: 'Connected',
                    timestamp: new Date().toISOString()
                });
            } catch (error) {
                res.status(500).json({
                    error: 'Database connection failed',
                    details: error.message
                });
            }
        });

        // Middleware de manejo de errores
        app.use((err, req, res, next) => {
            console.error('❌ Error:', err);
            res.status(500).json({
                error: 'Internal server error',
                message: err.message
            });
        });

        // Iniciar servidor
        app.listen(PORT, () => {
            console.log(`✅ Servidor LTI corriendo en http://localhost:${PORT}`);
            console.log(`🔗 LTI Endpoint: http://localhost:${PORT}/lti-launch`);
            console.log(`📊 Health Check: http://localhost:${PORT}/health`);
            console.log(`🧪 Test DB: http://localhost:${PORT}/test-db`);
        });

    } catch (error) {
        console.error('❌ Error iniciando servidor:', error);
        process.exit(1);
    }
};

startServer();

export { app };