import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditUser from "../components/EditUser/EditUser";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
