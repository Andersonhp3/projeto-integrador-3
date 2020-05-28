'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('endereco', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      cep: {
        type: Sequelize.INTEGER(8),
        allowNull: false
      },
      logradouro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numero: {
        type: Sequelize.STRING(10),
      },
      bairro: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id'
        },
        allowNull: false
      },
      estado_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'estado',
          key: 'id'
        },
        allowNull: false
      },
      cidade_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cidade',
          key: 'id'
        },
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('endereco');
    
  }
};
