import { createStore, combineReducers } from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
});

let store = createStore(reducers);

export default store;
