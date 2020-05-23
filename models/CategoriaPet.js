let CategoriaPet = (sequelize, DataTypes) => {
    let categoria_pet = sequelize.define(
        'CategoriaPet', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              },
              categoria: {
                type: DataTypes.STRING(45),
                allowNull: false
              }
        }, {
            tableName: 'categoria_pet',
            timestamps: false
        }
    );

    categoria_pet.associate = (models) => {
        categoria_pet.hasMany(models.Pet, {
          foreignKey: 'categoria_pet_id',
          as: 'pet'
        })
    }

    return categoria_pet;
};

module.exports = CategoriaPet;