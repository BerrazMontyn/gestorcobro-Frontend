import axios from "axios";
export const GET_CUSTOMERS = "GET_CUSTOMERS";

export const getCustomers = () => {
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