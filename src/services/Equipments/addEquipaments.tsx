import api from "../api";

interface IEquipment {
  id?: string;
  name: string;
  serial_number: string;
  model: string;
  type: string;
  situation: string;
  status:string,
  collaborator:string,
}

export const addEquipaments = async (values: IEquipment) => {

const route = `/equipment`;

const body = {
  id: values.id,
  name:values.name,
  serial_number:values.serial_number,
  model: values.model,
  type:values.type,
  situation: values.situation,
  collaborator:values.collaborator,
  status: values.status,
}
  try {
    await api.post(route, body);
    console.log(body);
    return Promise.resolve("Equipamento cadastrado com Sucesso");
  } catch (error) {
    return Promise.reject(error);
  }
};
