export const listPreviousCollaborator
 = () => {
  const data = [
    {
      id: 1,
      name: "Glauco Rodrigues",
      email: "glauco@gx2.com",
      department: "Infraestrutura",
      deliveryDate: "03/12/2021",
      returnDate: "24/04/2022",
    },
    {
      id: 2,
      name: "Sthefani Duarte",
      email: "sthefani@gx2.com",
      department: "Administrativo",
      deliveryDate: "20/10/2021",
      returnDate: "02/12/2021",
    },
    {
      id: 3,
      name: "Sinara Camargo",
      email: "sinara@gx2.com",
      department: "Recursos Humanos",
      deliveryDate: "10/07/2021",
      returnDate: "19/10/2021",
    },
    {
      id: 4,
      name: "Evelyn Fulber",
      email: "evelin@gx2.com",
      department: "Markenting",
      deliveryDate: "22/04/2021",
      returnDate: "09/07/2021",
    },
    {
      id: 5,
      name: "Luiz Garcia",
      email: "luiz@gx2.com",
      department: "Administrativo",
      deliveryDate: "20/04/2020",
      returnDate: "21/04/2021",
    },
    {
      id: 5,
      name: "Bruno Hostalcio",
      email: "bruno@gx2.com",
      department: "Administrativo",
      deliveryDate: "20/04/2020",
      returnDate: "21/04/2021",
    },
  ];
  try {
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
