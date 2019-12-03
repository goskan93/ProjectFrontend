import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { authReducer } from "./Modules/authModule";

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
}

const reducers = combineReducers({
  auth: authReducer,
});
const persistReducers = persistReducer(persistConfig, reducers)

const enhancer = applyMiddleware(thunk);

const store = createStore(persistReducers, enhancer);

const persistor = persistStore(store)

export { persistor, store };
