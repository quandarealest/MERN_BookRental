const Users = require('./users.modal');

class UsersService {
  getOne(id) {
    return Users.findOne({
      _id: id,
    }).exec();
  }

  getList() {
    return Users.find({
      deletedAt: null
    }).exec();
  }

  create(userInfo) {
    return Users.create(userInfo);
  }

  delete(id){
    return Users.updateOne({ _id: id }, {
      deletedAt: new Date()
    }).exec();
  }

}

module.exports = UsersService;