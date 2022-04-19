const data = [
  {
    token: "1",
    email: "mateus.lammel@gmail.com",
    password: "12345678",
  },
  { 
    token: "2",
    email: "douglas@gmail.com",
    password: "987654321",
  },  
  {
    token: "3",
    email: "cadu@gmail.com",
    password: "lalalalala",
  },
];

export const authenticateUser  = async (values: {email:string, password: string}) => {
  try {
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject('Ocorreu um erro ao efetuar o login!');
  }
};
