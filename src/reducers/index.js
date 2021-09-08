import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({//Normal JS ES6 {Destructuring}
	counter: counterReducer,
	isLogged: isLoggedReducer
});

export default allReducers;