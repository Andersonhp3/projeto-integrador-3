'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('imagem_produto', [{
      id: 1,
      imagem: '/images/NoPath-Copia-1.png',
      produto_id: 1
    },
    {
      id: 2,
      imagem: '/images/NoPath - Copia (21).png',
      produto_id: 2
    },
    {
      id: 3,
      imagem: '/images/luva1.jpg',
      produto_id: 3
    },
    {
      id: 4,
      imagem: '/images/NoPath - Copia (13).png',
      produto_id: 4
    },
    {
      id: 5,
      imagem: '/images/NoPath - Copia (17).png',
      produto_id: 5
    },
    {
      id: 6,
      imagem: '/images/NoPath - Copia (17).png',
      produto_id: 6
    },
    {
      id: 7,
      imagem: '/images/roupaPet1.jpg',
      produto_id: 7
    },
    {
      id: 8,
      imagem: '/images/roupaPet1.jpg',
      produto_id: 8
    },
    {
      id: 9,
      imagem: '/images/roupaPet1.jpg',
      produto_id: 9
    },
    {
      id: 10,
      imagem: '/images/transporte1.jpg',
      produto_id: 10
    },
    {
      id: 11,
      imagem: '/images/brinquedo1.jpg',
      produto_id: 11
    },
    {
      id: 12,
      imagem: '/images/NoPath - Copia (5).png',
      produto_id: 12
    },
    {
      id: 13,
      imagem: '/images/NoPath - Copia (5).png',
      produto_id: 13
    },
    {
      id: 14,
      imagem: '/images/aquario.jpg',
      produto_id: 14
    },
    {
      id: 15,
      imagem: '/images/filtro.jpg',
      produto_id: 15
    },
    {
      id: 16,
      imagem: '/images/NoPath - Copia (2).png',
      produto_id: 16
    },
    {
      id: 17,
      imagem: '/images/NoPath - Copia (-4.png',
      produto_id: 17
    },
    {
      id: 18,
      imagem: '/images/NoPath - Copia (20).png',
      produto_id: 18
    },
    {
      id: 19,
      imagem: '/images/NoPath - Copia (20).png',
      produto_id: 19
    },
    {
      id: 20,
      imagem: '/images/remedio1.png',
      produto_id: 20
    },
    {
      id: 21,
      imagem: '/images/remedio1.png',
      produto_id: 21
    },
  ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('imagem_produto', null, {});

  }
};