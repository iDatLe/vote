const initialState = {
	data: null
}

function GetPollReducer (state=initialState, action) {
	switch (action.type) {
		case "GET_POLL":
			return {
				...state,
				data: action.data
			}
		default: 
			return state
	}
}

export default GetPollReducer;