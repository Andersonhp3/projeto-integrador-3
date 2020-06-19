'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('categoria_pet', [{
        id: 1,
        categoria: 'Cachorros',
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
        categoria: 'Roedores'
      },
      {
        id: 5,
        categoria: 'Peixes'
      },
      {
        id: 7,
        categoria: 'Répteis'
      },
      {
        id: 8,
        categoria: 'Não Aplicavel'
      },
    ],
     {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('categoria_pet', null, {});

  }
};