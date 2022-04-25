
import api from '../api'

export const authLogin = (values: 
    { email: string; password: string }
) => {
    try{
        return  api.post("/auth/login", {
            email: values.email,
            password: values.password,
        },
        )

    }catch(error){
        return Promise.reject(error);
    }  
    
}