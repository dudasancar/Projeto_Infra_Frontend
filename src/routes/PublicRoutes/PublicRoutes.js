import React from "react";
import {  Route, Routes } from "react-router-dom";
import ChooseNewPassword from "../../pages/Employee/ForgotPassword/ChooseNewPassword";
import SendEmail from "../../pages/Employee/ForgotPassword/SendEmail";
import Login from "../../pages/Employee/Login";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/esqueciSenha" element={<SendEmail />} />
      <Route path="/recuperarSenha/:token" element={<ChooseNewPassword />} />
    </Routes>
  );
};

export default PublicRoutes;
