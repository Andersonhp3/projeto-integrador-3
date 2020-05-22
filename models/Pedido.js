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
        pedido.belongsTo(models.Usuario, {
            as: "usuario"
        })
    }

    return pedido;
}

module.exports = Pedido;