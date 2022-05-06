import api from "../api";

interface IEquipment {
  id: string;
  name: string;
  serial_number: string;
  model: string;
  type: string;
  sittuation: string;
  status: string;
  created_at: Date;
}

export const LinkEquipments = async (
  { id, model, name, serial_number, status, type }: IEquipment,
  collaborator_id: string
) => {
  try {
    api.put(`equipment/${id}`, {
      collaborator_id,
      model,
      name,
      serial_number,
      status,
      situation: "Indisponível",
      type,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
