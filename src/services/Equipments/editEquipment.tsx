import api from "../api";

interface IEquipment {
  name: string;
  serial_number: string;
  model: string;
  type: string;
  situation: string;
  status: string;
  collaborator_id: string | null;
  id: string;
}

export const editEquipment = async ({
  name,
  serial_number,
  model,
  type,
  situation,
  status,
  collaborator_id,
  id,
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
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

