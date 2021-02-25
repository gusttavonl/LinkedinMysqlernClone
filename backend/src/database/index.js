const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Publicacao = require('../models/Publicacao');

const connection = new Sequelize(dbConfig);

Publicacao.init(connection);

module.exports = connection;