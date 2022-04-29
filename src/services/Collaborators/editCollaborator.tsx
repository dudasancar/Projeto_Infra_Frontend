import api from "../api";

interface IEmployee {
  name: string;
  email: string;
  type: string;
  id?: string | null;
}

export const editCollaborator = async ({ email, name, type, id }: IEmployee) => {
  try {
    api.put(`employee/${id}`, {
      name,
      email,
      type,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
