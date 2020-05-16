'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('estado', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      estado: {
        type: Sequelize.STRING(2),
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('estado');

  }
};
