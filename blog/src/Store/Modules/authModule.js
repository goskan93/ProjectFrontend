import { createActions, handleActions } from "redux-actions";

const authActionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
};

const { login, logout } = createActions(
  authActionTypes.LOGIN,
  authActionTypes.LOGOUT
);

const initialState = {
  token: null //"ae1b8caa62801553cacbf84fee216eedba59738d"
};

const authReducer = handleActions(
  {
    [authActionTypes.LOGIN]: (state, action) => {
      const { token } = action.payload;
      return { ...state, token: token };
    },
    [authActionTypes.LOGOUT]: (state, _) => {
      return { ...state, token: null };
    }
  },
  initialState
);

export { authReducer, login, logout };
