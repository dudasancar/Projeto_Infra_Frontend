import api from "../api";

export const listCollaborators = () => {
  try {
    return api.get("/collaborator", {});
  } catch (error) {
    return Promise.reject(error);
  }
};
