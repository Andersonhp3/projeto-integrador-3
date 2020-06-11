'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pet', {
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
      idade: {
        type: Sequelize.INTEGER(2),
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      contato: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      raca: {
        type: Sequelize.STRING(45),
      },
      genero: {
        type: Sequelize.STRING(45),
      },
      adotado: {
        type: Sequelize.BOOLEAN,
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
    
    return queryInterface.dropTable('pet');

  }
};
