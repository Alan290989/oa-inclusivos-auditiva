import Sequelize from 'sequelize';

// Configuración para la Base de datos

export const sequelize = new Sequelize('moodle', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false, // Opcional: desactiva los logs
});

export default sequelize;