let pedidoProduto = (sequelize, DataTypes) => {
  let pedido_produto = sequelize.define(
    "pedidoProduto", {
      pedido_id: {
        type: DataTypes.INTEGER,
        references: {
          model:"Pedido",
          key: "id"
        },
        allowNull: false,
        primaryKey: true
      },
      produto_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Produto",
          key:"id"
        },
        allowNull: false,
        primaryKey: true
      },
    }, {
      tableName: "pedido_produto",
      timestamps: true
    }
  );

  pedidoProduto.associate = (models) =>{
    pedidoProduto.belongsTo(models.Pedido, {foreignKey: 'pedido_id'})
    pedidoProduto.belongsTo(models.Produto, {foreignKey: 'produto_id'})
  }

  return pedido_produto;
}

module.exports = pedidoProduto;