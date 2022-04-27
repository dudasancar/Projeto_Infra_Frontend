import api from "../api";

export const addEmployees = async (
  name: string,
  email: string,
  type: string
) => {
  try {
    api.post(`employee/`, {
      name: name,
      email: email,
      type: type,
      password: "12345678",
      status: "ativo",
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
