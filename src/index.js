/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
const Mongoose = require('mongoose');
const Server = require('./backend/Server');
const {
  port,
  host,
  OptionsConnect,
  UrlConnect,
} = require('./backend/connect/clientConfig');
const TestConnect = require('./backend/connect/testConnect');

const ObjetConnection = Mongoose.connection;

Mongoose.Promise = global.Promise;

// Configuracion asincrona de la conección de mongoDB
async function connectAsync(Url, Options) {
  await Mongoose.connect(Url, Options);
}

connectAsync(UrlConnect, OptionsConnect).then(() => {
// Iniciamos la conección a mongoDB de forma asincrona
  Server.listen(port, () => {
    console.warn(`node server running on: ${host}/api/v1/`);
    // Mostramos por consola la ruta del servidor
  });
})
// Cacturamos cual quier error que ocurra en la conección a mongodb
  .catch((error) => console.error(error));
// Módulo de gestión de eventos en la colección mongodb
TestConnect(UrlConnect, ObjetConnection);
