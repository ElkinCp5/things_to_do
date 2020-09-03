/* eslint-disable no-unused-vars */
require('dotenv').config();
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
// eslint-disable-next-line import/no-extraneous-dependencies
const webpackDevMiddleware = require('webpack-dev-middleware');
const methodOverride = require('method-override');
const engineRender = require('ejs');
const morgan = require('morgan');
const express = require('express');
const routes = require('../Routers');
const webpackConfig = require('../../../webpack.config');
const path = require('../root');

// eslint-disable-next-line new-cap
const newPath = new path('/public/');

const server = express();
const exJson = express.json();
const staticPath = express.static;
const bodyParser = express.urlencoded({ extended: false });

server.use(exJson);
server.use(bodyParser);
server.use(morgan('dev'));
server.use(methodOverride('X-HTTP-Method-Override'));
server.use(staticPath(newPath.folder()));

server.set('views', newPath.folder());
server.engine('html', engineRender.renderFile);
server.set('view engine', 'html');

server.use('/api/v1/', routes);
server.get('*', async (req, res) => {
  res.render('index.html');
});

module.exports = server;
