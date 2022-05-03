import api from "../../api";
interface IValues {
  newPassword: string;
  confirmNewPassword: string;
  token: string;
}
export const SetEmployeeNewPassword = ({
  newPassword,
  confirmNewPassword,
  token,
}: IValues) => {
  try {
    return api.put(`/employee/resetPassword/${token}`, {
      newPassword,
      confirmNewPassword,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
