const UsersService = require('./users.service');

class UsersController{
  constructor(){
    this.service = new UsersService();
    this.get = this.get.bind(this);    
    this.load = this.load.bind(this);
    this.list = this.list.bind(this);
  }

  async load(req, res) {
    const { params } = req;
    const { id: userId } = params;
    const user = await this.service.getOne(userId);
    req.user = user;
    return next();
  }

  get(req, res) {
    const {user} = req.body;
    return res.json(user);
  }
  async list(req, res) {
    const userList = await this.service.getList();
    return res.json(userList);
  }
}