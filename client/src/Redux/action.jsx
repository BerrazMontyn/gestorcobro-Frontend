import axios from 'axios';
export const GET_CUSTOMERS = 'GET_CUSTOMERS';
export const CREATE_CUSTOMER = 'CREATE_CUSTOMER';

export function getCustomers() {
	return async (dispatch) => {
		try {
			const json = await axios.get('/customers');

			return dispatch({
				type: GET_CUSTOMERS,
				payload: json.data.customer
			});
		} catch (error) {
			console.log('Error en action GETCUSTOMERS', error);
		}
	};
}

export function createCustomer(payload) {
	return async (dispatch) => {
		try {
			const json = await axios.post('/customers', payload);
			return dispatch({
				type: CREATE_CUSTOMER,
				payload: json.data
			});
		} catch (error) {
			console.log('Error en CreateCustomers', error);
		}
	};
}
