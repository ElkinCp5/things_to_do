const express = require('express');
const controllers = require('../Controllers');

const Router = express.Router();

Router.get('/products/', controllers.product.all);
Router.get('/products/:id', controllers.product.detail);
Router.post('/products/', controllers.product.create);
Router.delete('/products/:id', controllers.product.distroy);

// Exportamos la configuración

module.exports = Router;
