import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hardwares from "./pages/Hardwares";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/criacaoEquipamentos" element={<Hardwares />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
