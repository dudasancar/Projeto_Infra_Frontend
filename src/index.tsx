import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MessageProvider } from "./context/MessageContext/Index";
import MainRoutes from "./routes/MainRoutes";

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <MessageProvider>
      <MainRoutes />
    </MessageProvider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
