import { IEquipment } from "../../interfaces/equipment";
import api from "../api";

export const linkEquipments = async (
  {
    id,
    model,
    name,
    serial_number,
    status,
    type,
    department,
    processor,
    memory,
    storage,
    system,
    office,
    purchase,
  }: IEquipment,
  collaborator_id: string
) => {
  try {
    api.put(`equipment/${id}`, {
      collaborator_id,
      model,
      name,
      serial_number,
      status,
      situation: "Em uso",
      type,
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
