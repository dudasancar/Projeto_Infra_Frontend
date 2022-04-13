import { AlertColor } from "@mui/material";
import React, { useContext } from "react";

interface MessageModal{
  content: string,
  display: boolean,
  severity: AlertColor
}

interface MessageContext{
  message: MessageModal,
  setMessage: any
}

interface Props {
  children: JSX.Element;
}

export const MessageContext = React.createContext<MessageContext>({
  message:{
    content: '',
    display: false,
    severity: 'success'
  },
  setMessage: {}
});

export const MessageProvider = (props: Props) => {
  const [message, setMessage] = React.useState<MessageModal>({content: '', display: false, severity: 'success'});

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