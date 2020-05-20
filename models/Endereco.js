let Endereco = (sequelize, DataTypes) => {
    let endereco = sequelize.define(
        "Endereco", {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            logradouro: {
                type: DataTypes.STRING,
                allowNull: false
            },
            numero: {
                type: DataTypes.STRING(10)
            },
            bairro: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            usuario_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            estado_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            cidade_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'cidade',
                    key: 'id'
                },
                allowNull: false
            }
        }, {
            tableName: 'endereco',
            timestamps: false
        }
    );
    endereco.associate = (models) => {
        endereco.belongsTo(models.Usuario, {
            as: 'usuario'
        })
        endereco.belongsTo(models.Cidade, {
            as: 'cidade'
        })
        endereco.belongsTo(models.Estado, {
            as: 'estado'
        })
    }

    return endereco;
}

module.exports = Endereco;