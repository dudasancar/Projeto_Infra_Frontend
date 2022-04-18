import React from "react";
import ReactDOM from "react-dom";
import LateralMenu from "./components/LateralMenu/Index";
import GlobalStyle from "./styles/GlobalStyle";


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <LateralMenu />
  </React.StrictMode>,
  document.getElementById("root")
);
