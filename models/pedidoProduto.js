let pedidoProduto = (sequelize, DataTypes) => {
  let pedido_produto = sequelize.define(
    "PedidoProduto", {
      pedido_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      produto_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: "pedido_produto",
      timestamps: false
    }
  );

  return pedido_produto;
}

module.exports = pedidoProduto;