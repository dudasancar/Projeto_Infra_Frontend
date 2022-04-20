import React from "react";
import ReactDOM from "react-dom";
import { MessageProvider } from "./context/MessageContext/Index";
import MainRoutes from "./routes/MainRoutes/MainRoutes";

ReactDOM.render(
  <React.StrictMode>
    <MessageProvider>
      <MainRoutes />
    </MessageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
