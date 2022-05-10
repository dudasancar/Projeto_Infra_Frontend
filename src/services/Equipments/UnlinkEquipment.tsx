import api from "../api";

interface IEquipment {
  id: string;
  name: string;
  serial_number: string;
  model: string;
  type: string;
  stituation: string;
  status: string;
  created_at: Date;
  collaborator_id: string;
}

export const unLinkEquipments = async ({
  id,
  model,
  name,
  serial_number,
  status,
  type,
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
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
