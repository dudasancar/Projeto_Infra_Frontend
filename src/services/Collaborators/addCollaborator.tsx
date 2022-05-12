import api from "../api";
import { ICollaborator } from "../../pages/Collaborator/AddEditCollaborator/interfaces"

export const addCollaborator = async (values: ICollaborator) => {
  try {
    api.post(`collaborator`, values
    );
  } catch (error) {
    return Promise.reject(error);
  }
};
