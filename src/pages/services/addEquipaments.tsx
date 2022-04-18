export const addEquipaments = async (
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
    return Promise.resolve("Equipamento cadastrado com Sucesso");
  } catch (error) {
    return Promise.reject(error);
  }
};
