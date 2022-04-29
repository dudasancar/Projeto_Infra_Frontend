import api from "../../api";

interface Iemail {
  email: string
}

export const sendEmailRequest = async ({ email }: Iemail) => {
  try {
    return Promise.resolve;
  } catch (error) {
    return Promise.reject(error);
  }
};
