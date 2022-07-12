import { IEquipment } from "../../interfaces/equipment";
import api from "../api";

export const unLinkEquipments = async ({
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
}: IEquipment) => {
  try {
    api.put(`equipment/${id}`, {
      collaborator_id: null,
      model,
      name,
      serial_number,
      status,
      situation: "Disponível",
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
