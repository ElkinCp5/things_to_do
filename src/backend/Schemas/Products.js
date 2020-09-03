const moongose = require('mongoose');

const { Schema } = moongose;

const productsSchema = new Schema({
  subtotal: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = productsSchema;
