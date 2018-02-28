const initialState = {
	title: '',
	options: ''
}

function DashboardReducer (state=initialState, action) {
	switch (action.type) {
		case "DASHBOARD_INPUT":
			return {
				...state,
				[action.name]: (action.value)
			}
		default:
			return state
	}
}

export default DashboardReducer;