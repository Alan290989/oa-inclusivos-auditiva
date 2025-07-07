// models/OA.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const OA = sequelize.define('mdl_oa', {
    id: {
        type: DataTypes.BIGINT(10),
        primaryKey: true,
        autoIncrement: true
    },
    oa_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    status: {
        type: DataTypes.TINYINT(2),
        defaultValue: 1
    }
}, {
    timestamps: false,
    tableName: 'mdl_oa'
});