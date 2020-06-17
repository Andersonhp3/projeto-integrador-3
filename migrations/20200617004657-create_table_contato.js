'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contato', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      mensagem: { 
          type: Sequelize.TEXT,
          allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('contato');
    
  }
};
