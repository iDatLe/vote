import { combineReducers } from "redux";
import SignUpReducer from './SignUpReducer';
import LoginReducer from './LoginReducer';
import DashboardReducer from './DashboardReducer';
import VoteTestReducers from './VoteTestReducers';
import GetPollReducer from './GetPollReducer';
import VotingLandingReducer from './VotingLandingReducer';

export default combineReducers({
	SignUpReducer,
	LoginReducer,
	DashboardReducer,
	VoteTestReducers,
	GetPollReducer,
	VotingLandingReducer
});