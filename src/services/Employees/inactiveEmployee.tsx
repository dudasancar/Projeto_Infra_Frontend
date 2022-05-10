import api from "../api";

export const inactiveEmployee = async (id: string) => {
  try {
    api.put(`employee/inactive/${id}`, {
      status: "inativo",
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
