'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('produto', [{
      id: 1,
      nome: 'Cama para cão',
      preco: 49.99,
      descricao: 'Cama para cães e gatos nº1 com almofada e cesto ótima opção para o descanso do seu melhor amigo. Essa cama é confeccionada em plástico e traz ótimo custo benefício para você.',
      estoque: 5,
      categoria_id: 4,
      usuario_id: 1
    },
    {
      id: 1,
      nome: 'Cama para cão',
      preco: 49.99,
      descricao: 'Cama para cães e gatos nº1 com almofada e cesto ótima opção para o descanso do seu melhor amigo. Essa cama é confeccionada em plástico e traz ótimo custo benefício para você.',
      estoque: 5,
      categoria_id: 4,
      usuario_id: 1
    },
  ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('produto', null, {});

  }
};