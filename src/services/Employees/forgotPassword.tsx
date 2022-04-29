import api from "../api";

interface ForgotPassword {
  password: string;
  confirmPassword: string;
}

export const forgotPassword = async ({
  password,
  confirmPassword,
}: ForgotPassword) => {
  try {
    return Promise.resolve;
  } catch (error) {
    return Promise.reject(error);
  }
};
