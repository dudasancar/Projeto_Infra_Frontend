export const listEquipaments = () => {
  const data = [
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
    },
    {
      id: 2,
      equipamentType: "Nootebok",
      name: "Nootebok - Core i7",
      equipamentModel: "Intel CORE i7",
      serieNumber: "Y64CCD45646464",
      currentUser: "Stefani",
      previousUser: "Douglas",
      department: "recursosHumanos",
      situation: "Boa",
      buyDate: "09/04/2020",
      invoice: "",
      term: "",
      deliveryDate: "19/04/2022",
      description: "Windows 10 -  8G RAM - Core i7 vPRO - 8th Gen - Intel",
    },
    {
      id: 3,
      equipamentType: "Periferico",
      name: "Monitor",
      equipamentModel: "Samsung",
      serieNumber: "234CCD45664urt",
      currentUser: "Mateus",
      previousUser: "Ben-Hur",
      department: "administrativo",
      situation: "Boa",
      buyDate: "08/04/2019",
      invoice: "",
      term: "",
      deliveryDate: "20/04/2022",
      description: "Samsung - 21 - 100-240v",
    },
  ];
  try {
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
