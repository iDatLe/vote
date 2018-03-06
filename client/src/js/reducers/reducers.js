import { combineReducers } from "redux";
import SignUpReducer from './SignUpReducer';
import LoginReducer from './LoginReducer';
import DashboardReducer from './DashboardReducer';
import VoteTestReducers from './VoteTestReducers';
import GetPollReducer from './GetPollReducer';
import VotingLandingReducer from './VotingLandingReducer';

const appReducer = combineReducers({
	SignUpReducer,
	LoginReducer,
	DashboardReducer,
	VoteTestReducers,
	GetPollReducer,
	VotingLandingReducer
});

const rootReducers = (state, action) => {
	if (action.type === 'LOGOUT') {
		state = undefined
	}
	return appReducer(state, action)
}

export default rootReducers