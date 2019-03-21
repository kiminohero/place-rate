import { CURRENT_USER } from '../actions/types';

const initialState = {
  firstname: null,
  lastname: null,
  email: null,
  photo: null,
  id: null,
  username: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
};
