const Users = require('./users.modal');

class UsersService {
  getOne(id) {
    return Users.findOne({
      _id: id,
    }).exec();
  }

  getList() {
    return Users.find({}).exec();
  }
}

module.exports = UsersService;