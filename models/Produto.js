let Produto = (sequelize, DataTypes) => {
  let produto = sequelize.define(
    'Produto', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      preco: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      descricao: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      estoque: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      numero_vendas: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: '0'
      },
      categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      tableName: 'produto',
      timestamps: false
    }
  );

  produto.associate = (models) => {
    produto.belongsTo(models.Categoria, {
      foreignKey: 'categoria_id',
      as: 'categoria'
    });

    produto.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id',
      as: 'usuario'
    });

    produto.belongsToMany(models.Pedido, {
      through: "pedido_produto",
      foreignKey: 'produto_id',
      as: 'pedido',
    });

    produto.hasMany(models.ImagemProduto, {
      foreignKey: 'produto_id',
      as: 'imagem'
    })
  }

  return produto;
};

module.exports = Produto;