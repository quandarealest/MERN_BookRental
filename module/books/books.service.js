const Books = require('./books.modal');

class BooksService {
  getOne(id) {
    return Books.findOne({
      _id: id,
      deletedAt: null,
    }).exec();
  }

  getList(){
    return Books.find({
      deletedAt: null
    }).exec();
  }

  create(bookInfo) {
    return Books.create(bookInfo);
  }

  update(id, bookInfo) {
    return Books.updateOne({ _id: id }, bookInfo).exec();
  }

  delete(id) {
    return Books.updateOne({ _id: id }, {
      deletedAt: new Date(),
    }).exec()
  }
}

module.exports = BooksService;