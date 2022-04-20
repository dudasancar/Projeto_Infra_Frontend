export const editedEquipaments = async (
  id: number,
  equipamentType: string,
  name: string,
  equipamentModel: string,
  serieNumber: string,
  currentUser: string,
  previousUser: string,
  department: string,
  situation: string,
  buyDate: string,
  invoice: string,
  term: string,
  deliveryDate: string,
  description: string,
) => {
  try {
    return Promise.resolve("Sucesso na Postagem");
  } catch (error) {
    return Promise.reject(error);
  }
};
