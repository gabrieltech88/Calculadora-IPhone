const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize('calculadora_iphone', process.env.USUARIO_DB, process.env.SENHA_DB, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

async function testConnection() {
    try {
      await sequelize.authenticate()
      console.log('Conexão bem-sucedida com o MySQL!');
    } catch(error) {
      console.error('Não foi possível conectar ao MySQL:', error);
    }
}


module.exports = { testConnection };