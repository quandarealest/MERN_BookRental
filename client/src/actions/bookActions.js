import axios from 'axios';
import { ACTION_TYPES } from '../reducers/booksReducer';

export const getBooks = () => dispatch => {
  axios
    .get('/api/books')
    .then(res => 
      dispatch({
        type: ACTION_TYPES.GET_BOOKS,
        payload: res.data
      }))
}

export const addBook = (newBook) => dispatch => {
  axios
    .post('/api/books', newBook)
    .then(res => 
      dispatch({
        type: ACTION_TYPES.ADD_BOOK,
        payload: res.data,
      }))
}

export const deleteBook = (id) => dispatch => {
  axios
    .delete(`/api/books/${id}`)
    .then(res => 
      dispatch({
        type: ACTION_TYPES.DELETE_BOOK,
        payload: id
      }))
}