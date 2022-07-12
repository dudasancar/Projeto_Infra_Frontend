import { IEquipment } from "../../interfaces/equipment";
import api from "../api";

export const editEquipment = async ({
  name,
  serial_number,
  model,
  type,
  situation,
  status,
  collaborator_id,
  id,
  department,
  processor,
  memory,
  storage,
  system,
  office,
  purchase,
}: IEquipment) => {
  try {
    api.put(`equipment/${id}`, {
      name,
      serial_number,
      model,
      type,
      situation,
      status,
      collaborator_id,
      department,
      processor,
      memory,
      storage,
      system,
      office,
      purchase,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
