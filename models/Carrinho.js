let Carrinho = (sequelize, DataTypes) => {
  let carrinho = sequelize.define('Carrinho', {
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'carrinho',
    timestamps: true
  });


  carrinho.associate = (models) => {
    carrinho.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id',
      as: 'usuario'
    });
    carrinho.belongsTo(models.Produto, {
      foreignKey: 'produto_id',
      as: 'produto'
    })
  };
  return carrinho;
};

module.exports = Carrinho