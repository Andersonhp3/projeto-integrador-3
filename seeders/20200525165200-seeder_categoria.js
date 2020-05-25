'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('categoria', [{
        id: 1,
        categoria: 'Alimentação',
      },
      {
        id: 2,
        categoria: 'Farmácia'
      },
      {
        id: 3,
        categoria: 'Higiene'
      },
      {
        id: 4,
        categoria: 'Camas'
      },
      {
        id: 5,
        categoria: 'Brinquedos'
      },
      {
        id: 6,
        categoria: 'Casinhas e Acessórios'
      },
      {
        id: 7,
        categoria: 'Passeio'
      },
      {
        id: 8,
        categoria: 'Adestramento'
      },
      {
        id: 9,
        categoria: 'Roupas e Acessórios'
      },
      {
        id: 10,
        categoria: 'Arranhadores'
      },
      {
        id: 11,
        categoria: 'Transporte'
      },
      {
        id: 12,
        categoria: 'Coleiras'
      },
      {
        id: 13,
        categoria: 'Comedouros e Bebedouros'
      },
      {
        id: 14,
        categoria: 'Fonte para gatos'
      },
      {
        id: 15,
        categoria: 'Aquário'
      },
      {
        id: 16,
        categoria: 'Bombas e Compressores'
      },
      {
        id: 17,
        categoria: 'Filtros'
      },
      {
        id: 18,
        categoria: 'Gaiolas Hamster'
      },
      {
        id: 19,
        categoria: 'Bombas e Compressores'
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('People', null, {});

  }
};