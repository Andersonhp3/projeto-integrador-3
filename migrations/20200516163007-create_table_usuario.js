'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('usuario', {
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
      senha: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      cpf_cnpj: {
        type: Sequelize.STRING(14),
        allowNull: false
      },
      imagem: {
        type: Sequelize.STRING(200),
      }
    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('usuario');
   
  }
};