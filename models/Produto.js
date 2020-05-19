let Produto = (sequelize, DataTypes) => {
    let produto = sequelize.define(
        'Produto', {
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
              preco: {
                type: DataTypes.FLOAT,
                allowNull: false
              },
              descricao: {
                type: DataTypes.STRING(200),
                allowNull: false
              },
              estoque: {
                type: DataTypes.INTEGER,
                allowNull: false
              },
              categoria_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
              },
              usuario_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
              }
        }, {
            tableName: 'Produto',
            timestamps: false
        }
    );

    produto.associate = (models) => {
        produto.belongsTo(models.Categoria, {foreignKey: 'categoria_id', as:'categoria'});
        produto.belongsTo(models.Usuario, {foreignKey:'usuario_id', as:'usuario'});
    }

    return produto;
};

module.exports = Produto;