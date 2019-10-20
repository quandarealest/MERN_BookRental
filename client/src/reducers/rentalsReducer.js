
export const ACTION_TYPES = {
  ADD_RENTAL: 'rentals/ADD_RENTAL',
  GET_RENTALS: 'rentals/GET_RENTALS',
  DELETE_RENTAL: 'rentals/DELETE_RENTAL',
}

const addRental = (payload) => ({
  type: ACTION_TYPES.ADD_RENTAL,
  payload
});

const getRentals = () => ({
  type: ACTION_TYPES.GET_RENTALS,
});

const deleteRental = (payload) => ({
  type: ACTION_TYPES.DELETE_RENTAL,
  payload,
})

const initialState = {
  rentalList: [],
  loading: false,
}

export const actions = {
  getRentals,
  deleteRental,
  addRental,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ACTION_TYPES.GET_RENTALS:
      return {
        ...state,
        rentalList: action.payload,
      }
    case ACTION_TYPES.ADD_RENTAL:
      return {
        ...state,
        rentalList: [...state.rentalList, action.payload]
      }
    case ACTION_TYPES.DELETE_RENTAL:
      return {
        ...state,
        rentalList: state.rentalList.filter(item => item._id !== action.payload),
      }
    default:
      return state;
  }
}