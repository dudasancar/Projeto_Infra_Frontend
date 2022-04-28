import api from "../api";

export const ChangeEmployeePassword = (id: string | undefined) => {
  try {
    return api.put(`/employee/changePassword/${id}`, {
      oldPassword:"oladadsad",
      newPassword:"lalalala",
      confirmNewPassword: "lalalalal",
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
