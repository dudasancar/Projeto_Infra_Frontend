import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditUser from "../pages/EditUser/Index";
import GlobalStyle from "../components/GlobalStyle";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/editarUsuario" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
