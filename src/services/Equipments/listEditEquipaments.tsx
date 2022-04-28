export const listEditEquipaments = () => {
  const data = 
    {
      id: 1,
      equipamentType: "Periferico",
      name: "Mouse",
      equipamentModel: "Optical Mouse",
      serieNumber: "Y64CCD",
      currentUser: "Glauco",
      previousUser: "Duda",
      department: "infraestrutura",
      situation: "Boa",
      buyDate: "10/04/2020",
      invoice: "",
      term: "",
      deliveryDate: "20/04/2022",
      description: "Mouse Optical - Gamer",
    };
    
  try {
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
