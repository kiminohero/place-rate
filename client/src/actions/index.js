import { CURRENT_USER, LOGIN_USER } from './types';
import axios from 'axios';

// Action Creater1
export const currentUser = token => async dispatch => {
  const response = await axios.get('/user/curr_user', {
    headers: { Authorization: token }
  });

  dispatch({
    type: CURRENT_USER,
    payload: response.data
  });
};

export const login = () => async dispatch => {
  const response = await axios.post('/auth/login', {
    username: 'amiya-1998',
    password: 'maruti3315'
  });

  dispatch({
    type: LOGIN_USER,
    payload: response.data
  });
};
