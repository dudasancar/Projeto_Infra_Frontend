import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Login from "../pages/Login/Index";
import ModalMessage from "../components/ModalHelper/Index";
import { useMessage } from "../context/MessageContext/Index";
import EmployeesList from "./components/Employees/EmployeesList";

const MainRoutes = () => {
  const { message } = useMessage();

  return (
    <BrowserRouter>
      {message.display && <ModalMessage />}

      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listarFuncionarios" element={<EmployeesList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
