const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize('calculadora_iphone', process.env.USUARIO_DB, process.env.SENHA_DB, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexão bem-sucedida com o MySQL!');
  })
  .catch((err) => {
    console.error('Não foi possível conectar ao MySQL:', err);
  });

module.exports = sequelize;