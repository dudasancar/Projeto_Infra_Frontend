interface IEquipment {
  id?: string;
  equipamentType: string;
  name: string;
  equipamentModel: string;
  serieNumber: string;
  currentUser: string;
  previousUser: string;
  department: string;
  situation: string;
  buyDate: string;
  baseFileInvoice?: string;
  baseFileTerm?: string;
  deliveryDate: string;
  description: string;
}

export const editedEquipaments = async (values: IEquipment) => {
  try {
    return Promise.resolve("Sucesso na Postagem");
  } catch (error) {
    return Promise.reject(error);
  }
};
