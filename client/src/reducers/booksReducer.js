export const ACTION_TYPES = {
  GET_BOOKS: 'books/GET_BOOKS',
  ADD_BOOK: 'books/ADD_BOOK',
  DELETE_BOOK: 'books/DELETE_BOOK',
}

const getBooks = () => ({
  type: ACTION_TYPES.GET_BOOKS
});

const addBook = (payload) => ({
  type: ACTION_TYPES.ADD_BOOK,
  payload
});

const deleteBook = (payload) => ({
  type: ACTION_TYPES.DELETE_BOOK,
  payload
});

const initialState = {
  bookList: [],
  loading: false,
}

export const actions = {
  getBooks,
  deleteBook,
  addBook,
};

export default function(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}