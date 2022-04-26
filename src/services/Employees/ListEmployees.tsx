
import api from '../api'

export const listEmployees = () => {
    try{
        return  api.get("/employee", {
        },
        )

    }catch(error){
        return Promise.reject(error);
    }  
    
}