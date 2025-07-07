// models/OAUserProgress.js - Corregido
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js'; // ✅ Ruta correcta

export const OAUserProgress = sequelize.define('mdl_oa_user_progress', {
    id: {
        type: DataTypes.BIGINT(10),
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.BIGINT(10),
        allowNull: false
    },
    oa_id: {
        type: DataTypes.BIGINT(10),
        allowNull: false
    },
    completion_status: {
        type: DataTypes.TINYINT(2),
        defaultValue: 0
    },
    progress: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    },
    last_updated: {
        type: DataTypes.BIGINT(10),
        allowNull: false
    },
    custom_data: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: false,
    tableName: 'mdl_oa_user_progress'
});

// Nota: Las relaciones deberían estar en un archivo separado o en index.js
// para evitar problemas de importación circular

export default OAUserProgress;