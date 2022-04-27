import api from "../api";

export const getEmployee = (id: string | undefined) => {
  try {
    return api.get(`/employee/${id}`, {});
  } catch (error) {
    return Promise.reject(error);
  }
};
