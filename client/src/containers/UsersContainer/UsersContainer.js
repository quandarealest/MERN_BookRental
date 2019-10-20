import { connect } from 'react-redux';

import Users from '../../components/Users/Users';
import { getUsers, addUser, deleteUser } from '../../actions/userActions';

const mapStateToProps = state => ({
  userList: state.users.userList,
})

const mapDispatchToProps = {
  getUserList: getUsers,
  addUser,
  deleteUser, 
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);