import axios from 'axios';
import { ACTION_TYPES } from '../reducers/usersReducer';

export const getUsers = () => dispatch => {
  axios
    .get('/api/users')
    .then(res => 
      dispatch({
        type: ACTION_TYPES.GET_USERS,
        payload: res.data,
      }))
}

export const addUser = (newUser) => dispatch => {
  axios
    .post('/api/users', newUser)
    .then(res => 
      dispatch({
        type: ACTION_TYPES.ADD_USER,
        payload: res.data,
      }))
}

export const deleteUser = (id) => dispatch => {
  axios
    .delete(`/api/users/${id}`)
    .then(res => 
      dispatch({
        type: ACTION_TYPES.DELETE_USER,
        payload: id,
      }))
}