let Contato = (sequelize, DataTypes) => {
    let contato = sequelize.define(
        "Contato", {
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
            email: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            mensagem: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        }, {
            tableName: "contato",
            timestamps: false
        }
    );

    return contato;
}

module.exports = Contato;