const initialState = {
	data: []
}

function VotingLandingReducer (state=initialState, action) {
	switch (action.type) {
		case "RETRIEVE_VOTE":
			return {
				...state,
				data: action.data
			}
		default: 
			return state
	}
}

export default VotingLandingReducer;