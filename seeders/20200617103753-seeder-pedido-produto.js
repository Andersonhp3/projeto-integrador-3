"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pedido_produto",
      [
        {
          pedido_id: 1,
          produto_id: 5,
          quantidade: 1
        },
        {
          pedido_id: 2,
          produto_id: 8,
          quantidade: 2
        },
        {
          pedido_id: 3,
          produto_id: 1,
          quantidade: 1
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pedido_produto", null, {});
  },
};
