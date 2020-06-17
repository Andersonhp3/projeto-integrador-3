'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('imagem_produto', [{
      id: 1,
      imagem: '/images/produtos/default.png',
      produto_id: 1
    },
    {
      id: 2,
      imagem: '/images/produtos/default.png',
      produto_id: 2
    },
    {
      id: 3,
      imagem: '/images/produtos/default.png',
      produto_id: 3
    },
    {
      id: 4,
      imagem: '/images/produtos/default.png',
      produto_id: 4
    },
    {
      id: 5,
      imagem: '/images/produtos/default.png',
      produto_id: 5
    },
    {
      id: 6,
      imagem: '/images/produtos/default.png',
      produto_id: 6
    },
    {
      id: 7,
      imagem: '/images/produtos/default.png',
      produto_id: 7
    },
    {
      id: 8,
      imagem: '/images/produtos/default.png',
      produto_id: 8
    },
    {
      id: 9,
      imagem: '/images/produtos/default.png',
      produto_id: 9
    },
    {
      id: 10,
      imagem: '/images/produtos/default.png',
      produto_id: 10
    },
    {
      id: 11,
      imagem: '/images/produtos/default.png',
      produto_id: 11
    },
    {
      id: 12,
      imagem: '/images/produtos/default.png',
      produto_id: 12
    },
    {
      id: 13,
      imagem: '/images/produtos/default.png',
      produto_id: 13
    },
    {
      id: 14,
      imagem: '/images/produtos/default.png',
      produto_id: 14
    },
    {
      id: 15,
      imagem: '/images/produtos/default.png',
      produto_id: 15
    },
    {
      id: 16,
      imagem: '/images/produtos/default.png',
      produto_id: 16
    },
    {
      id: 17,
      imagem: '/images/produtos/default.png',
      produto_id: 17
    },
    {
      id: 18,
      imagem: '/images/produtos/default.png',
      produto_id: 18
    },
    {
      id: 19,
      imagem: '/images/produtos/default.png',
      produto_id: 19
    },
    {
      id: 20,
      imagem: '/images/produtos/default.png',
      produto_id: 20
    },
    {
      id: 21,
      imagem: '/images/produtos/default.png',
      produto_id: 21
    },
  ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('imagem_produto', null, {});

  }
};