let Categoria = (sequelize, DataTypes) => {
    let categoria = sequelize.define(
        'Categoria', {
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
            tableName: 'categoria',
            timestamps: false
        }
    );

    return categoria;
};

module.exports = Categoria;