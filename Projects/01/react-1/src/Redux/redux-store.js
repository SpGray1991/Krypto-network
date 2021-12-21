import { createStore, combineReducers } from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  userPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers);

export default store;
