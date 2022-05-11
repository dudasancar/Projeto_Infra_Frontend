import api from '../api'

export const Collaborators = async () =>{
 try {
    const response = await api.get(`/collaborator`);
    return response;
} catch(error){
  return Promise.reject(error)
}
};