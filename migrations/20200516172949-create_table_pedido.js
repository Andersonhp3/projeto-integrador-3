'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('users', { 
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
