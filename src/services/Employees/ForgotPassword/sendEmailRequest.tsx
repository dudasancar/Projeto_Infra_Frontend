import api from "../../api";

export const sendEmailRequest = async (email: string) => {
  try {
    api.post(`employee/forgotPassword`, {
      email: email,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
