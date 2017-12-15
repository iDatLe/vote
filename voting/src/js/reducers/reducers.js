import { combineReducers } from "redux";
import SignUpReducer from './SignUpReducer';
import LoginReducer from './LoginReducer';

export default combineReducers({
	SignUpReducer,
	LoginReducer,
});