let Pet = (sequelize, DataTypes) => {
  let pet = sequelize.define(
    'Pet', {
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
      idade: {
        type: DataTypes.INTEGER(2),
        allowNull: false
      },
      descricao: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      contato: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      raca: {
        type: DataTypes.STRING(45),
      },
      genero: {
        type: DataTypes.STRING(45),
      },
      adotado: {
        type: DataTypes.BOOLEAN,
      },
      categoria_pet_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'pet',
      timestamps: false
    }
  );

  pet.associate = (models) => {
    pet.belongsTo(models.CategoriaPet, {
      foreignKey: 'categoria_pet_id',
      as: 'categoria'
    });

    pet.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id',
      as: 'usuario'
    });

    pet.hasMany(models.ImagemPet, {
      foreignKey: 'pet_id',
      as: 'imagem'
    })
    
  }

  return pet;
};

module.exports = Pet;