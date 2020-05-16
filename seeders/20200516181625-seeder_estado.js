'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('estado', [{
        id: 1,
        estado: 'AC'
      },
      {
        id: 2,
        estado: 'AL'
      },
      {
        id: 3,
        estado: 'AM'
      },
      {
        id: 4,
        estado: 'AP'
      },
      {
        id: 5,
        estado: 'BA'
      },
      {
        id: 6,
        estado: 'CE'
      },
      {
        id: 7,
        estado: 'DF'
      },
      {
        id: 8,
        estado: 'ES'
      },
      {
        id: 9,
        estado: 'GO'
      },
      {
        id: 10,
        estado: 'MA'
      },
      {
        id: 11,
        estado: 'MG'
      },
      {
        id: 12,
        estado: 'MS'
      },
      {
        id: 13,
        estado: 'MT'
      },
      {
        id: 14,
        estado: 'PA'
      },
      {
        id: 15,
        estado: 'PB'
      },
      {
        id: 16,
        estado: 'PE'
      },
      {
        id: 17,
        estado: 'PI'
      },
      {
        id: 18,
        estado: 'PR'
      },
      {
        id: 19,
        estado: 'RJ'
      },
      {
        id: 20,
        estado: 'RN'
      },
      {
        id: 21,
        estado: 'RO'
      },
      {
        id: 22,
        estado: 'RR'
      },
      {
        id: 23,
        estado: 'RS'
      },
      {
        id: 24,
        estado: 'SC'
      },
      {
        id: 25,
        estado: 'SE'
      },
      {
        id: 26,
        estado: 'SP'
      },
      {
        id: 27,
        estado: 'TO'
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('estado', null, {});

  }
};