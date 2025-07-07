// backend/routes/oa.routes.js
import express from 'express';
import { sequelize } from '../database/database.js';

const router = express.Router();

// Obtener todos los OAs activos
router.get('/', async (req, res) => {
    try {
        const oas = await sequelize.models.OA.findAll({
            where: { status: 1 },
            attributes: ['id', 'oa_name', 'description']
        });
        res.json(oas);
    } catch (error) {
        console.error('Error al obtener OAs:', error);
        res.status(500).json({ error: 'Error al obtener objetos de aprendizaje' });
    }
});

// Obtener progreso de usuario en un OA
router.get('/progress/:userId/:oaId', async (req, res) => {
    try {
        const progress = await sequelize.models.OAUserProgress.findOne({
            where: {
                user_id: req.params.userId,
                oa_id: req.params.oaId
            }
        });
        res.json(progress || {});
    } catch (error) {
        console.error('Error al obtener progreso:', error);
        res.status(500).json({ error: 'Error al obtener progreso' });
    }
});

// Actualizar progreso de usuario
router.post('/progress', async (req, res) => {
    try {
        const [progress, created] = await sequelize.models.OAUserProgress.upsert({
            user_id: req.body.user_id,
            oa_id: req.body.oa_id,
            completion_status: req.body.completion_status || 5,
            progress: req.body.progress || 0,
            last_updated: Math.floor(Date.now() / 1000)
        }, {
            returning: true
        });

        res.json(progress);
    } catch (error) {
        console.error('Error al actualizar progreso:', error);
        res.status(500).json({ error: 'Error al actualizar progreso' });
    }
});

export default router;  // Exportación por defecto