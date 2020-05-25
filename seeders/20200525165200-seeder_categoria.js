'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('categoria', [{
        id: 1,
        categoria: 'Cachorro'
      },
      {
        id: 2,
        categoria: 'Gatos'
      },
      {
        id: 3,
        categoria: 'Pássaros'
      },
      {
        id: 4,
        categoria: 'Hamster'
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('People', null, {});

  }
};