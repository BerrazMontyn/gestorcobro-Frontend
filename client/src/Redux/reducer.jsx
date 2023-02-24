import { GET_CUSTOMERS, CREATE_CUSTOMER } from './action';

let initialState = {
	customers: []
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

		default:
			return state;
	}
}

export default rootReducer;
