import { connect } from 'react-redux';
import Rental from '../../components/Rentals/Rentals';
import { getRentals, addRental, deleteRental } from '../../actions/rentalActions';

const mapStateToProps = state => ({
  bookList: state.books.bookList,
  userList: state.users.userList,
  rentalList: state.rentals.rentalList,
})

const mapDispatchToProps = {
  getRentals,
  addRental,
  deleteRental
}

export default connect(mapStateToProps, mapDispatchToProps)(Rental);