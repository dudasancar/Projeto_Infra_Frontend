export const addEmployees = async (
  name: string,
  email: string,
  type: string,
  status: string,
) => {
  try {
    return Promise.resolve("Cadastrado com Sucesso");
  } catch (error) {
    return Promise.reject(error);
  }
};


