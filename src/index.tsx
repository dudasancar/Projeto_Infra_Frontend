import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./GlobalStyles";
import MainRoutes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <MainRoutes />
  </React.StrictMode>,
  document.getElementById("root"),
);
