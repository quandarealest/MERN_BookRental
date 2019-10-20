import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import usersReducer from './usersReducer';
import rentalsReducer from './rentalsReducer';

export default combineReducers({
  books: booksReducer,
  users: usersReducer,
  rentals: rentalsReducer,
});