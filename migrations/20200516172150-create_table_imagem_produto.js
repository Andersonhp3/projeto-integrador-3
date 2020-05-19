'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('imagem_produto', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      imagem: {
        type: Sequelize.STRING(200),
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
    })
  },

  down: (queryInterface, Sequelize) => {
    
  return queryInterface.dropTable('imagem_produto');
    
  }
};
