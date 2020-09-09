/* eslint-disable no-unused-vars */
import * as dotenv from 'dotenv';
// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack';
// eslint-disable-next-line import/no-extraneous-dependencies
import webpackDevMiddleware from 'webpack-dev-middleware';
import methodOverride from 'method-override';
import engineRender from 'ejs';
import morgan from 'morgan';
import express from 'express';
import routes from '../Routers';
import webpackConfig from '../../../webpack.config';
import paths from '../root';

dotenv.config();
// eslint-disable-next-line new-cap
const path = new paths('/public/');

const server = express();
const exJson = express.json();
const staticPath = express.static;
const bodyParser = express.urlencoded({ extended: false });

server.use(exJson);
server.use(bodyParser);
server.use(morgan('dev'));
server.use(methodOverride('X-HTTP-Method-Override'));
server.use(staticPath(path.folder()));
// server.use(webpackDevMiddleware(webpack(webpackConfig)));

// Configuracion de view engine para el rederizado de html
server.set('views', path.folder());
server.engine('html', engineRender.renderFile);
server.set('view engine', 'html');

// Rutas para el backend
server.use('/api/v1/', routes);

// Ruta para plantilla de UI
server.get('*', async (req, res) => {
  res.render('index.html');
});

module.exports = server;
