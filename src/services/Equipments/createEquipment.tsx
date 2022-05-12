import api from "../api";
import { ICollaborator } from "../../pages/Collaborator/AddEditCollaborator/interfaces";

interface IEquipment {
  name: string;
  serial_number: string;
  model: string;
  type: string;
  situation: string;
  status: string;
  collaborator_id: string | null;
}

export const addEquipment = async ({
  name,
  serial_number,
  model,
  type,
  situation,
  status,
  collaborator_id,
}: IEquipment) => {
  try {
    api.post(`equipment`, {
      name,
      serial_number,
      model,
      type,
      situation,
      status,
      collaborator_id,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
