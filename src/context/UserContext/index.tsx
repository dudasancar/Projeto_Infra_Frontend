import React, { useContext } from "react";

interface UserContextInterfaceObject{
  name: string;
  email: string;
  token: string;
}

interface UserContextInterface{
    user: UserContextInterfaceObject,
    setUser: any
  }

interface Props {
    children: JSX.Element;
  }
  


export const UserContext = React.createContext<UserContextInterface>({
  user:{
    name: "",
    email: "",
    token: ""
  },
  setUser: {}
});

export const UserProvider = (props: Props) => {
  const [user, setUser] = React.useState<UserContextInterfaceObject>({name: "", email: "", token: ""});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  const { user, setUser } = context;

  return {
    user,
    setUser,
  };
}