import React from "react";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";

import GlobalStyle from "../components/GlobalStyle";
import AddEditUser from "../pages/AddEditUser/Index";

const MainRoutes = () => {
  const { id } = useParams();

  function IdPrivateRoute({ children }) {
    return id != undefined ? children : <Navigate to="/cadastroUsuario" />;
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
