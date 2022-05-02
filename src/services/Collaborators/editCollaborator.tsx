import api from "../api";
import { ICollaborator } from "../../pages/AddEditCollaborator/interfaces";

export const editCollaborator = async (values: ICollaborator) => {
  try {
    api.put(`collaborator/${values.id}`, values);
  } catch (error) {
    return Promise.reject(error);
  }
};
