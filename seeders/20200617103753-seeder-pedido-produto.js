"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pedido_produto",
      [
        {
          pedido_id: 1,
          produto_id: 5,
        },
        {
          pedido_id: 2,
          produto_id: 8,
        },
        {
          pedido_id: 3,
          produto_id: 1,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pedido_produto", null, {});
  },
};
