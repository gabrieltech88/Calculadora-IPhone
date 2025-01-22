const Sequelize = require('sequelize');
const sequelize = new Sequelize('calculadora_iphone', 'root', 'senha', {
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