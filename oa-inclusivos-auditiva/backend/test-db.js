import sequelize from './database/database.js';

async function testDB() {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexión establecida correctamente.');

        // También puedes hacer una consulta simple:
        const [results, metadata] = await sequelize.query("SELECT * FROM mdl_oa");
        console.log('Resultado de la consulta:', results);

    } catch (error) {
        console.error('❌ No se pudo conectar a la base de datos:', error.message);
    }
}

testDB();