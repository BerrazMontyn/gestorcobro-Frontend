import { GET_CUSTOMERS } from './action';

let initialState = {
	customers: {}
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CUSTOMERS:
			return {
				...state,
				customers: action.payload,
			};

		default:
			return state;
	}
}

export default rootReducer;
