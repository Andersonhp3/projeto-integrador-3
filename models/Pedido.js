let Pedido = (sequelize, DataTypes) => {
  let pedido = sequelize.define(
    "Pedido", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      data: {
        type: DataTypes.DATE,
        allowNull: false
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      tableName: "pedido",
      timestamps: false
    }
  );

  pedido.associate = (models) => {
    pedido.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
      as: "usuario"
    })
    pedido.belongsToMany(models.Produto, {
      foreignKey: 'produto_id',
      as: 'produtos',
      through: "pedidoProduto"
    })

  }

  return pedido;
}

module.exports = Pedido;