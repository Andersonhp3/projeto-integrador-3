let Cidade = (sequelize, DataTypes) => {
    let cidade = sequelize.define(
        "Cidade", {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            cidade: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            estado_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            tableName: "cidade",
            timestamps: false
        }
    );

    cidade.associate = (models) => {
        cidade.hasMany(modes.Endereco, {
            as: 'endereco'
        })
        cidade.belongsTo(models.Estado, {
            as: 'estado'
        })
    };

    return cidade;
}

module.exports = Cidade;