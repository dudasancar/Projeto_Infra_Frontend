import api from "../api";

export const getEquipmentHistory = (id: string | undefined) => {
  try {
    return api.get(`/equipment/${id}`, {});
  } catch (error) {
    return Promise.reject(error);
  }
};
