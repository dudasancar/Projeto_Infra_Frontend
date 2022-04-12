export const addUsers = async (name: string, email: string, type: string) => {
  try {
    return Promise.resolve("Cadastrado com Sucesso");
  } catch (error) {
    return Promise.reject(error);
  }
};

export const editUsers = async (name: string, email: string, type: string) => {
  try {
    return Promise.resolve("Sucesso na postagem");
  } catch (error) {
    return Promise.reject(error);
  }
};
