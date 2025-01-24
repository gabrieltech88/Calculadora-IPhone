'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addColumn('usuarios', 'salt', {
        type: Sequelize.STRING,
        allowNull: false // Ou true, conforme a necessidade
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'salt');
  }
};
