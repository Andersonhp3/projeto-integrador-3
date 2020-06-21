let pedidoProduto = (sequelize, DataTypes) => {
  let pedido_produto = sequelize.define(
    "PedidoProduto", {
      pedido_id: {
        type: DataTypes.INTEGER,
        references: {
          model:"Pedido",
          key: "id"
        },
        allowNull: false
      },
      produto_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Produto",
          key:"id"
        },
        allowNull: false
      },
      quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: "pedido_produto",
      timestamps: false
    }
  );

  pedidoProduto.associate = (models) =>{
    pedidoProduto.belongsTo(models.Pedido, {foreignKey: 'pedido_id'})
    pedidoProduto.belongsTo(models.Produto, {foreignKey: 'produto_id'})
  }

  return pedido_produto;
}

module.exports = pedidoProduto;