const mongoose = require('mongoose');
const { Schema } = mongoose;

const RentalsSchema = new Schema(
  {
    bookId: String,
    userId: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    expiredAt: Date
  },
  {
    versionKey: false,
    collection: 'rentals'
  }
)

module.exports = mongoose.model('Rentals', RentalsSchema);
