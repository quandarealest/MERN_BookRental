export const ACTION_TYPES = {
  GET_USERS: 'users/GET_USERS',
  ADD_USER: 'users/ADD_USER',
  DELETE_USER: 'users/DELETE_USER',
}

const addUser = (payload) => ({
  type: ACTION_TYPES.ADD_USER,
  payload,
});

const getUsers = () => ({
  type: ACTION_TYPES.ADD_USER,
});

const deleteUser = (payload) => ({
  type: ACTION_TYPES.DELETE_USER,
  payload,
})

const initialState = {
  userList: [],
  loading: false,
}

export const actions = {
  getUsers,
  addUser,
  deleteUser,
}

export default function(state = initialState, action) {
  switch(action.type){
    case ACTION_TYPES.ADD_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload]
      }
    case ACTION_TYPES.GET_USERS:
      return {
        ...state,
        userList: action.payload,
      }
    case ACTION_TYPES.DELETE_USER:
      return {
        ...state,
        userList: state.userList.filter(item => item._id !== action.payload)
      }
    default:
      return state;
  }
}
