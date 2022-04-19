export const getUser = async () => {
  const data = [
    {
      id: "1",
      name: "Mateus",
      email: "mateus.lammel@gmail.com",
      type: "administrador",
    },
  ];
  try {
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
