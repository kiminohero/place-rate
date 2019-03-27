import { CURRENT_USER, LOGIN_USER } from "./types";
import axios from "axios";

// Action Creater1
export const currentUser = token => async dispatch => {
  const response = await axios.get("/user/curr_user", {
    headers: { Authorization: token }
  });

  dispatch({
    type: CURRENT_USER,
    payload: response.data
  });
};

export const login = ({ username, password }) => async dispatch => {
  const response = await axios.post("/auth/login", {
    username,
    password
  });

  dispatch({
    type: LOGIN_USER,
    payload: response.data
  });
};
