import { connect } from 'react-redux';
import Rental from '../../components/Rentals/Rentals';
import { getRentals, addRental, deleteRental } from '../../actions/rentalActions';
import { actions as UserActions } from '../../reducers/usersReducer';

const mapStateToProps = state => ({
  bookList: state.books.bookList,
  userList: state.users.userList,
  sort: state.users.sort,
  rentalList: state.rentals.rentalList,
})

const mapDispatchToProps = {
  getRentals,
  addRental,
  deleteRental,
  sortByUser: UserActions.sortByUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Rental);