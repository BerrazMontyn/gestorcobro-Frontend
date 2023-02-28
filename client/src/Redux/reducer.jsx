import { GET_CUSTOMERS, GET_CATEGORIES, CREATE_CUSTOMER } from './action';

let initialState = {
	customers: [],
	categories: {}
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CUSTOMERS:
			return {
				...state,
				customers: action.payload
			};
		case CREATE_CUSTOMER:
			return {
				...state
			};
		case GET_CATEGORIES:
			return {
				...state,
				categories: action.payload
			};

		default:
			return state;
	}
}

export default rootReducer;
