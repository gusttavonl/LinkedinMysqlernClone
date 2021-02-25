const { Model, DataTypes } = require('sequelize');

class Publicacao extends Model {
  static init(sequelize) {
    super.init({
        titulo: DataTypes.STRING,
        imagem: DataTypes.STRING,
        usuario: DataTypes.STRING,
        descricaoUsuario: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = Publicacao;