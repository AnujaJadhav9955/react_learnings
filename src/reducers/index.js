import { counter } from "./counter";
import { isLoggedReducer } from "./isLogged";
import { combineReducers } from "redux";

export const reducers = combineReducers({
 counter: counter,
 isLogged: isLoggedReducer
})
