import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import AddEditEmployee from "../pages/AddEditEmployee/Index";
import EmployeesList from "../pages/EmployeesList/index";
import EquipmentsList from "../pages/EquipmentsList/index";
import Login from "../pages/Login/Index";
import ModalMessage from "../components/ModalHelper/Index";
import { useMessage } from "../context/MessageContext/Index";
import Hardwares from "../pages/Hardwares";

const MainRoutes = () => {
  const id = true;
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
        <Route path="/listarEquipamentos" element={<EquipmentsList />} />
        <Route
          path="/editarFuncionario/:id"
          element={
            <IdPrivateRoute>
              <AddEditEmployee />
            </IdPrivateRoute>
          }
        />
        <Route
          path="/cadastroFuncionario"
          element={<AddEditEmployee userId={null} />}
        />
        <Route
          path="/edicaoEquipamentos/:id"
          element={
            <IdPrivateRoute>
              <Hardwares />
            </IdPrivateRoute>
          }
        />
        <Route path="/cadastroEquipamentos" element={<Hardwares />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
