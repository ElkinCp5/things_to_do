const mongoose = require('mongoose');
const schemas = require('../Schemas');

const modelUser = mongoose.model('User', schemas.user, 'users');
module.exports = modelUser;
