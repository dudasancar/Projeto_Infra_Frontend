import api from '../api';

export const getEquipment = async (id:string | undefined) =>{
 try {
    const response = await api.get(`/equipment/${id}`);
    return response.data;
} catch(error){
  return Promise.reject(error)
}
};