let Estado = (sequelize, DataTypes) => {
    let estado = sequelize.define(
        "Estado", {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            estado: {
                type: DataTypes.STRING(2),
                allowNull: false
            },
        }, {
            tableName: "estado",
            timestamps: false
        }
    );

    estado.associate = (models) => {
        estado.hasMany(models.Cidade, {
            foreignKey: 'estado_id',
            as: "cidade"
        })
    }

    return estado;
}

module.exports = Estado;