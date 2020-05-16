'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cidade', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      cidade: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      estado_id: { 
          type: Sequelize.INTEGER,
          references: {
            model: 'estado',
            key: 'id'
          },
          allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('cidade');
    
  }
};
