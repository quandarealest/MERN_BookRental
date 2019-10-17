const Rentals = require('./rentals.modal');

class RentalsService {
  getOne(id) {
    return Rentals.findOne({ _id: id, deletedAt: null }).exec();
  }

  getList() {
    return Rentals.find({ deletedAt: null }).exec();
  }

  create(rentalInfo) {
    return Rentals.create(rentalInfo);
  }

  update(id, rentalInfo) {
    return Rentals.updateOne({ _id: id }, rentalInfo).exec();
  }

  delete(id) {
    return Rentals.updateOne({ _id: id }, {
      deletedAt: new Date()
    }).exec();
  }
}