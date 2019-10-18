const { Router } = require('express');
const BooksController = require('./books.controller');

class BooksRouter {
  constructor(){
    const controller = new BooksController();
    const router = new Router();

    router.get('/',controller.list);
    router.get('/:id',controller.get);
    router.post('/',controller.create);
    router.delete('/:id',controller.delete);
    router.put('/:id',controller.update);
    router.param('id',controller.load);

    this.router = router;
  }
}

module.exports = BooksRouter;