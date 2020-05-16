'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categoria', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      categoria: {
        type: Sequelize.STRING(45),
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('categoria');
  }
};
