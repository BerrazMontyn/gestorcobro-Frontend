import axios from "axios";
export const GET_CUSTOMERS = "GET_CUSTOMERS";
export const GET_CATEGORIES = "GET_CATEGORIES";


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

export function getCategories () {
    return async(dispatch) =>{
        try {
            const json = await axios.get("/categories")
            return dispatch({
                type: GET_CATEGORIES,
                payload: json.data

            })
            
        } catch (error) {
            console.log("Rompo en GETCATEGORIES", error)
        }
    }
}

