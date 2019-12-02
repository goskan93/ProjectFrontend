import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Modules/authModule";

const reducers = combineReducers({
  auth: authReducer,
});

const enhancer = applyMiddleware(thunk);

const store = createStore(reducers, enhancer);

export { store };
