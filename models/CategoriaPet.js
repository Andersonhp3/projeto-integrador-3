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

    return categoria_pet;
};

module.exports = CategoriaPet;