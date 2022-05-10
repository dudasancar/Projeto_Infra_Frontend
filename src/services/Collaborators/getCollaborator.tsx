import api from "../api";

export const getCollaborator = (id: string | undefined) => {
  try {
    return api.get(`/Collaborator/${id}`, {});
  } catch (error) {
    return Promise.reject(error);
  }
};
