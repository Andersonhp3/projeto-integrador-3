'use strict';
module.exports = (sequelize, DataTypes) => {
  const Carrinho = sequelize.define('Carrinho', {
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
  }, {});
  Carrinho.associate = function (models) {
    Carrinho.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id',
      as: 'usuario'
    })
    Carrinho.belongsTo(models.Produto, {
      foreignKey: 'produto_id',
      as: 'produto'
    })
  };
  return Carrinho;
};