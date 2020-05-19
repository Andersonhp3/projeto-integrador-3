let ImagemPet = (sequelize, DataTypes) => {
    let imagem_pet = sequelize.define(
        'ImagemPet', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              },
              imagem: {
                type: DataTypes.STRING(200),
                allowNull: false
              },
              pet_id: {
                type: DataTypes.INTEGER,
                allowNull: false
              }
        }, {
            tableName: 'imagem_pet',
            timestamps: false
        }
    );

    imagem_pet.associate = (models) => {
        imagem_pet.belongsTo(models.Pet, {foreignKey: 'pet_id', as:'pet'});
    }

    return imagem_pet;
};

module.exports = ImagemPet;