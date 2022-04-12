import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditUser from "../components/AddEditUser/Index";
import GlobalStyle from "../components/GlobalStyle";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
