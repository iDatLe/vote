const initialState = {
	title: '',
	options: '',
	redirect: false
}

function DashboardReducer (state=initialState, action) {
	switch (action.type) {
		case "DASHBOARD_INPUT":
			return {
				...state,
				[action.name]: (action.value)
			}
		case "DASHBOARD_REDIRECT":
			return {
				...state,
				redirect: true
			}
		case "DASHBOARD_REDIRECT_FALSE":
			return {
				...state,
				redirect: false
			}
		default:
			return state
	}
}

export default DashboardReducer;