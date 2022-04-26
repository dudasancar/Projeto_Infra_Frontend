import api from "../api";

export const editEmployees = async (
  id: string,
  password: string,
  name: string,
  email: string,
  type: string,
  status: string
) => {
  try {
    api.put(`employee/${id}`, {
      name: name,
      email: email,
      type: type,
      password: password,
      id: id,
      status: status,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
