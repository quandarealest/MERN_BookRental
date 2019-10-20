import axios from 'axios';
import { ACTION_TYPES } from '../reducers/rentalsReducer';

export const getRentals = () => dispatch => {
  axios
    .get('/api/rentals')
    .then(res => 
      dispatch({
        type: ACTION_TYPES.GET_RENTALS,
        payload: res.data,
    }))
}

export const addRental = (newRental) => dispatch => {
  axios
    .post('/api/rentals', newRental)
    .then(res => 
      dispatch({
        type: ACTION_TYPES.ADD_RENTAL,
        payload: res.data,
    }))
}

export const deleteRental = (id) => dispatch => {
  axios
    .delete(`/api/rentals/${id}`)
    .then(res => dispatch({
      type: ACTION_TYPES.DELETE_RENTAL,
      payload: id
    }))
}