'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedido', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id'
        },
        allowNull: false,
      }
    })
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('pedido');

  }
};
