import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import GlobalStyle from "../components/GlobalStyle";
import AddEditUser from "../pages/AddEditUser/Index";



const MainRoutes = () => {

  const {id} = useParams();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/listarUsuarios/:id' />
        <Route path="/editarUsuario" element={<AddEditUser  userId={id ? id : null} />} />
        <Route path="/cadastroUsuario" element={<AddEditUser userId={null} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
