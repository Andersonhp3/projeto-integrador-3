'use strict';

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
        }
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('pedido_produto');
    
  }
};
