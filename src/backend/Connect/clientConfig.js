/* eslint-disable max-len */
// eslint-disable-next-line import/no-unresolved
import creatConnect from './creatConnect';

const UrlConnect = (process.env.NODE_ENV == 'production') 
? creatConnect(process.env.USER_MONGO, process.env.PASSWORD_MONGO, (process.env.URL_MONGO).toString(), process.env.DB_MONGO)
: `${process.env.LOCAL_MONGO}/${process.env.DB_MONGO}`;
// eslint-disable-next-line no-console
// console.log({ UrlConnect });

module.exports = {
  port: process.env.PORT || 8080,
  host: 'http://localhost:8080',
  OptionsConnect: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 30000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
  },
  UrlConnect,
};
