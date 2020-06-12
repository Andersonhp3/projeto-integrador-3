'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedido_produto', { 
      pedido_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pedido',
          key: 'id'
        },
        allowNull: false
      },
      produto_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'produto',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('pedido_produto');
    
  }
};
