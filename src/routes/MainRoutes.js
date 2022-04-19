import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyle from "../styles/GlobalStyle";
import AddEditUser from "../pages/AddEditUser/Index";
import EmployeesList from "./components/Employees/EmployeesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Login from "../pages/Login/Index";
import ModalMessage from "../components/ModalHelper/Index";
import { useMessage } from "../context/MessageContext/Index";

const MainRoutes = () => {
  const id = 1;
  const { message } = useMessage();
  function IdPrivateRoute({ children }) {
    return id ? children : <Navigate to="/cadastroUsuario" />;
  }

  return (
    <BrowserRouter>
      {message.display && <ModalMessage />}
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listarFuncionarios" element={<EmployeesList />} />
        <Route path="/listarUsuarios/:id" />
        <Route
          path="/editarUsuario"
          element={
            <IdPrivateRoute>
              <AddEditUser userId={id} />
            </IdPrivateRoute>
          }
        />
        <Route
          path="/cadastroUsuario"
          element={<AddEditUser userId={null} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
