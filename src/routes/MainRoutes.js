import React from "react";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";

import GlobalStyle from "../styles/GlobalStyle";
import AddEditUser from "../pages/AddEditUser/Index";

const MainRoutes = () => {
  const  id = 1;

  function IdPrivateRoute({ children }) {
    return id ? children : <Navigate to="/cadastroUsuario" />;
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
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
