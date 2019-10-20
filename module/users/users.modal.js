const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema(
  {
    name: String,
    age: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    deletedAt: {
      type: Date,
      required: false
    },
  },
  {
    versionKey: false,
    collection: 'users'
  }
);

module.exports = mongoose.model('Users', UsersSchema);