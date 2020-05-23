let ImagemProduto = (sequelize, DataTypes) => {
    let imagem_produto = sequelize.define(
        'ImagemProduto', {
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
            produto_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            tableName: 'imagem_produto',
            timestamps: false
        }
    );

    imagem_produto.associate = (models) => {
        imagem_produto.belongsTo(models.Produto, {
            foreignKey: 'produto_id',
            as: 'produto'
        });
    }

    return imagem_produto;
};

module.exports = ImagemProduto;