import api from "../api";

export const listEmployees = () => {
  const data = [
    {
      id: '1',
      name: "Douglas",
      email: "douglas.fernandes@gx2.com.br",
      type: "Administrador",
      status: "Frigelar",
      password: "12345678",
    },
    {
      id: "dd8b7418-36dd-4902-9d8b-b08160b6cdd9",
      name: "Gustavo",
      email: "gustavo.fernandes@gx2.com.br",
      type: "Administrador",
      status: "Agibank",
      password: "12345678",
    },
    {
      id: "3",
      name: "Eduarda",
      email: "eduarda.fernandes@gx2.com.br",
      type: "Administrador",
      status: "HomeOffice",
      password: "12345678",
    },
    {
      id:" 4",
      name: "Carlos Eduardo",
      email: "carlos.fernandes@gx2.com.br",
      type: "Administrador",
      status: "NuBank",
      password: "12345678",
    },
    {
      id: "5",
      name: "Sthefanie",
      email: "sthe.fernandes@gx2.com.br",
      type: "Recursos Humanos",
      status: "GX2",
      password: "12345678",
    },
    {
      id: "6",
      name: "Roger",
      email: "roger.fernandes@gx2.com.br",
      type: "Administrador",
      status: "HomeOffice",
      password: "12345678",
    },
  ];

  try {
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
