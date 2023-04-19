import { GET_CUSTOMERS, GET_SERVICES, CREATE_SERVICES, VIEW_PAYMENTS } from './action';

let initialState = {
	customers: {},
	services: {}
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CUSTOMERS:
			return {
				...state,
				services: action.payload,
			};
		case GET_SERVICES:
			return {
				...state,
				services: action.payload,
			}	
			case CREATE_SERVICES:
			return {
				...state
			};

		default:
			return state;
	}
}

export default rootReducer;
