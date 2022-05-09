import React from "react";
import { render } from "react-dom";
import { MessageProvider } from "./context/MessageContext";
import { UserProvider } from "./context/UserContext";
import MainRoutes from "./routes/MainRoutes";

render(
  <React.StrictMode>
    <UserProvider>
      <MessageProvider>
        <MainRoutes />
      </MessageProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
