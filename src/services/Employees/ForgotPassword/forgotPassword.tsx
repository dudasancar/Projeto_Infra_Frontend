import api from "../../api";
interface IValues {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
  id: string;
}
export const ChangeEmployeePassword = ({
  oldPassword,
  newPassword,
  confirmNewPassword,
  id,
}: IValues) => {
  try {
    return api.put(`/employee/changePassword/${id}`, {
      oldPassword,
      newPassword,
      confirmNewPassword,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
