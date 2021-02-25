const express = require('express');

const PublicacaoController = require('./controllers/PublicacaoController');

const routes = express.Router();

routes.get('/publicacao', PublicacaoController.index);
routes.post('/publicacao', PublicacaoController.store);
routes.get('/publicacao/:id', PublicacaoController.findById);
routes.delete('/publicacao/:id', PublicacaoController.delete);
routes.put('/publicacao/:id', PublicacaoController.update);
module.exports = routes;