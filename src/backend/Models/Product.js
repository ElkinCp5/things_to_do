const mongoose = require('mongoose');
const schema = require('../Schemas');

const modelProducts = mongoose.model('Product', schema.products, 'Products');
module.exports = modelProducts;

// AGGREGATE

// POPULATE

// EVEN LOOP
