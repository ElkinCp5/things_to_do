const express = require('express');
const controllers = require('../Controllers');

const Router = express.Router();

Router.get('/users/', controllers.user.all);
Router.get('/users/account', controllers.user.account);
Router.get('/users/:id', controllers.user.detail);
Router.post('/users/', controllers.user.create);
Router.delete('/users/:id', controllers.user.distroy);

// Exportamos la configuración

module.exports = Router;
