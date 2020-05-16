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
                type: Sequelize.STRING(100),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            senha: {
                type: Sequelize.STRING(256),
                allowNull: false
            },
            cpf_cnpj: {
                type: Sequelize.STRING(14),
                allowNull: false
            },
            imagem: {
                type: Sequelize.STRING(200),
            }
        }, {
            tablename: 'usuario',
            timestamps: false
        }
    );

    return usuario;
};

module.exports = Usuario;