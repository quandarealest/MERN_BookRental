import { connect } from 'react-redux';
import { getBooks, addBook, deleteBook } from '../../actions/bookActions';
import Books from '../../components/Books/Books';
const mapStateToProps = state => ({
  bookList: state.books.bookList,
})

const mapDispatchToProps = {
  getBooks,
  addBook,
  deleteBook,
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);