const initialState = {
	selectOption: "",
	label: [],
	title: null,
	boolean: false,
	updatedPoll: false
}

function VoteTestReducers (state=initialState, action) {
	switch (action.type) {
		case 'RETRIEVE_POLL':
			return {
				...state,
				label: action.data,
				title: action.data2,
				boolean: true
			}
		case 'SELECT_OPTION':
			return {
				...state,
				selectOption: action.data,
			}
		case 'EDITED_POLL': 
			return {
				...state,
				updatedPoll: true
			}
		case 'EDITED_POLL_FALSE': 
			return {
				...state,
				updatedPoll: false
			}	
		case 'RESET_LABEL_FALSE': 
			return {
				label: [],
				boolean: false
			}			
		default:
			return state
	}
}

export default VoteTestReducers;