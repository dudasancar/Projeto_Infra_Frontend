import api from "../api";

export const inactiveCollaborator = async (id: string) => {
  try {
    api.put(`collaborator/inactive/${id}`, {
      status: "inativo",
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
