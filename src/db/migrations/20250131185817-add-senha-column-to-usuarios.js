'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('usuarios', 'senha', {
      type: Sequelize.STRING,  // Tipo de dado da coluna
      allowNull: false,        // Não pode ser nulo (opcional, depende da sua necessidade)
      unique: false,            // Se você quiser garantir que o email seja único (opcional)
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'email');
  }
};
