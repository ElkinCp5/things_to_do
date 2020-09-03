const express = require('express');
const user = require('./UserRouter');
const product = require('./ProductRouter');

const routes = express.Router();

routes.use(user);
routes.use(product);

module.exports = routes;
