const Moongose = require('mongoose');

const { Schema } = Moongose;

const usersSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: Number,
    required: true,
    trim: true,
  },
  email_verify: {
    type: Date,
    required: false,
    trim: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = usersSchema;
