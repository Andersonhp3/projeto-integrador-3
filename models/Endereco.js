let Endereco = (sequelize, DataTypes) => {
  let endereco = sequelize.define(
    "Endereco", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      cep: {
        type: DataTypes.STRING(8),
        allowNull: false
      },
      logradouro: {
        type: DataTypes.STRING,
        allowNull: false
      },
      numero: {
        type: DataTypes.STRING(10)
      },
      bairro: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      estado_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cidade_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'endereco',
      timestamps: false
    }
  );
  endereco.associate = (models) => {
    endereco.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id',
      as: 'usuario'
    })
    endereco.belongsTo(models.Cidade, {
      foreignKey: 'cidade_id',
      as: 'cidade'
    })
    endereco.belongsTo(models.Estado, {
      foreignKey: 'estado_id',
      as: 'estado'
    })
  }

  return endereco;
}



module.exports = Endereco;