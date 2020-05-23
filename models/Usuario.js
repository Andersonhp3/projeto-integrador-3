let Usuario = (sequelize, DataTypes) => {
    let usuario = sequelize.define(
        'Usuario', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING(256),
                allowNull: false
            },
            cpf_cnpj: {
                type: DataTypes.STRING(14),
                allowNull: false
            },
            imagem: {
                type: DataTypes.STRING(200),
            }
        }, {
            tableName: 'usuario',
            timestamps: false
        }
    );

    usuario.associate = (models) => {
        usuario.hasMany(models.Produto, {
            foreignKey: 'usuario_id',
            as: 'usuario'
        })

        usuario.hasMany(models.Pet, {
            foreignKey: 'usuario_id',
            as: 'usuario'
        })

        usuario.hasMany(models.Pedido, {
            foreignKey: 'usuario_id',
            as: 'usuario'
        })

        usuario.hasMany(models.Endereco, {
            foreignKey: 'usuario_id',
            as: 'usuario'
        })
    }

    return usuario;
};

module.exports = Usuario;