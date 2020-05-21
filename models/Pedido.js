let Pedido = (sequelize, DataTypes) => {
    let pedido = sequelize.define(
        "Pedido", {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            data: {
                type: DataTypes.DATE,
                allowNull: false
            },
            usuario_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        }, {
            tableName: "pedido",
            timestamps: false
        }
    );

    pedido.associate = (models) => {
        pedido.hasMany(models.Cidade, {
            as: "cidade"
        })
    }

    return pedido;
}

module.exports = Pedido;