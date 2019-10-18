const { Router } = require('express');
const RentalsController = require('./rentals.controller');

class RentalsRouter {
  constructor(){
    const controller = new RentalsController();
    const router = new Router();

    router.get('/', controller.list);
    router.get('/:id', controller.get);
    router.post('/', controller.create);
    router.delete('/:id', controller.delete);
    router.put('/:id', controller.update);
    router.param('id', controller.load);

    this.router = router;
  }
}

module.exports = RentalsRouter;