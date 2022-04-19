export const editEmployees = async (
  id: string,
  name: string,
  email: string,
  type: string
) => {
  try {
    return Promise.resolve("Sucesso na postagem");
  } catch (error) {
    return Promise.reject(error);
  }
};
