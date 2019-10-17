const BooksService = require('./books.service');

class BooksController {
  constructor(){
    this.service = new BooksService();
    this.list = this.list.bind(this);
    this.get = this.get.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.create = this.create.bind(this);
    this.load = this.load.bind(this);
  }

  async load(req, res, next) {
    const { params } = req;
    const { id: bookId } = params;
    const book = await this.service.getOne(bookId);
    req.book = book;
    return next();
  }

  async list(req, res) {
    const bookList = await this.service.getList();
    return res.json(bookList);
  }

  get(req, res) {
    const { book } = req;
    return res.json(book);
  }

  async update(req, res) {
    const { params } = req;
    const { id } = params;

    const newBook = req.body;
    await this.service.update(id, newBook);
    return res.json({ message: 'success' });
  }

  async delete(req, res) {
    const { params } = req;
    const { id } = params;

    await this.service.delete(id);
    return res.json({ message: 'success' });
  }

  async create(req, res) {
    const bookInfo = req.body;
    const newBook = await this.service.create(bookInfo);
    return res.json(newBook);
  }
}

module.exports = BooksController;