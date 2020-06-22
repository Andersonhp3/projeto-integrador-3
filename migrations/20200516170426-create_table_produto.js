'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produto', {
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
      marca: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      preco: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      estoque: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      numero_vendas: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: '0'
      },
      ativo: {
        type: Sequelize.BOOLEAN,
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categoria',
          key: 'id'
        },
        allowNull: false,
      },
      categoria_pet_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categoria_pet',
          key: 'id'
        },
        allowNull: false,
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
    return queryInterface.dropTable('produto');
  }
};
