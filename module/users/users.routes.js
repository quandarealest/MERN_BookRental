const { Router } = require('express');
const UsersController = require('./users.controller');

class UsersRoutes {
  constructor(){
    const controller = new UsersController();
    const router = new Router();

    router.get('/', controller.list);
    router.get('/:id', controller.get);
    router.post('/', controller.create);
    router.delete('/:id', controller.delete);
    router.param('id', controller.load);

    this.router = router;
  }
}

module.exports = UsersRoutes;