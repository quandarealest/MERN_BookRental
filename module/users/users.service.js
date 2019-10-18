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

  create(userInfo) {
    return Users.create(userInfo);
  }

  delete(id){
    return Users.delete({ _id: id }, {
      deleteAt: new Date()
    }).exec();
  }

}

module.exports = UsersService;