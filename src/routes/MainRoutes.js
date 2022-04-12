import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "../pages/AddUser";
import EditUser from "../pages/EditUser/Index";
import GlobalStyle from "../components/GlobalStyle";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/editarUsuario" element={<EditUser />} />
        <Route path="/cadastroUsuario" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
