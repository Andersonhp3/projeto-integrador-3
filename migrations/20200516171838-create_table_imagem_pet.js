'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('imagem_pet', {
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
      pet_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pet',
          key: 'id'
        },
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('imagem_pet');
    
  }
};
