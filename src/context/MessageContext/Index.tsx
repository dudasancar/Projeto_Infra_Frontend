import React, { useContext } from "react";

interface MessageContent{
  content: string,
  display: boolean,
  type: string
}


interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MessageContext = React.createContext({
  message: {},
  setMessage: {}
});

export const MessageProvider = (props: Props) => {
  const [message, setMessage] = React.useState<MessageContent>({ content: '', display: false,  type: '' });

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {props.children}
    </MessageContext.Provider>
  );
};

export function useMessage() {
  const context = useContext(MessageContext);
  const { message, setMessage } = context;

  return {
    message,
    setMessage,
  };
}