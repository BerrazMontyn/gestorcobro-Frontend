import axios from "axios";
export const GET_CUSTOMERS = "GET_CUSTOMERS";
export const GET_SERVICES = "GET_SERVICES";
export const CREATE_SERVICES = "CREATE_SERVICES"



export function getCustomers() {
    return async (dispatch) =>{
        try {
            const json = await axios.get("/customers");
            return dispatch ({
                type: GET_CUSTOMERS,
                payload: json.data
            })
            
        } catch (error) {
            console.log("Error en action GETCUSTOMERS", error)
            
        }
    
    }
}

export function getServices() {
    return async(dispatch) =>{
        try {
            const json = await axios.get("/services")
            
            return dispatch({
                type: GET_SERVICES,
                payload: json.data

            })
            
        } catch (error) {
            console.log("Rompo en GETSERVICES", error)
            
        }
    }
}

export function createService(payload) {
    return async(dispatch) =>{
        try {
            const jsonPost = await axios.post('/services', payload);
            console.log(jsonPost)
            return dispatch({
                type: CREATE_SERVICES,
                payload: jsonPost.data
            })
            
        } catch (error) {
            console.log('Rompo en POSTCATEGORIES', error)
        }
    }
}




