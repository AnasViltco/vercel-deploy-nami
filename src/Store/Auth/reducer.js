import produce from "immer";
import { REGISTER_USER_SUCCESSFUL, LOGIN_SUCCESS, LOGOUT } from "./actionTypes";

const initialState = {
  user: null,
  role: null,
  token: null,
};

const Auth = produce((state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.token = action.payload.token;
      break;
    case REGISTER_USER_SUCCESSFUL:
      state.user = action.payload.user;
      state.token = action.payload.accesToken;
      break;
    case LOGOUT:
      state.user = null;
      state.token = null;
      break;
    default:
      break;
  }
}, initialState);

export default Auth;
