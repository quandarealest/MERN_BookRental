import { connect } from 'react-redux';

import Users from '../../components/Users/Users';
import { actions } from '../../reducers/usersReducer';
import { getUsers, addUser, deleteUser } from '../../actions/userActions';

const mapStateToProps = state => ({
  userList: state.users.userList,
})

const mapDispatchToProps = {
  getUserList: getUsers,
  addUser,
  deleteUser, 
  sortByUser: actions.sortByUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);