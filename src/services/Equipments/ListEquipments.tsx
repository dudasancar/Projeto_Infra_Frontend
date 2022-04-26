
import api from '../api'

export const listEquipments = () => {
    try{
        return  api.get("/equipment", {
        },
        )

    }catch(error){
        return Promise.reject(error);
    }  
    
}