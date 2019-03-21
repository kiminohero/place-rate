import { LOGIN_USER } from '../actions/types';

const initialState = {
  loggedIn: false,
  BearerToken: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload;
    default:
      return state;
  }
};
