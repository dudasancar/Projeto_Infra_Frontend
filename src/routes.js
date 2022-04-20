import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Hardwares from "./pages/Hardwares";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/edicaoEquipamentos/:id" element={<Hardwares />} />
        <Route path="/cadastroEquipamentos" element={<Hardwares />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
