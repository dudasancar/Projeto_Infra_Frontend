import React from "react";
import { ReactDOM } from "react-dom";
import { MessageProvider } from "./context/MessageContext";
import { UserProvider } from "./context/UserContext";
import MainRoutes from "./routes/MainRoutes";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <MessageProvider>
        <MainRoutes />
      </MessageProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
