import api from "../api";

export const inactiveEquipment = async (id: string) => {
  try {
    api.put(`equipment/inactive/${id}`, {
      status: "inativo",
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
