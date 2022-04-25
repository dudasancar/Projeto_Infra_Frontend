import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import AddEditEmployee from "../pages/AddEditEmployee/Index";
import EmployeesList from "../pages/EmployeesList/index";
import EquipmentsList from "../pages/EquipmentsList/index";
import Login from "../pages/Login/Index";
import ModalMessage from "../components/ModalHelper/Index";
import { useMessage } from "../context/MessageContext/Index";
import MenuNavigation from "../components/MenuNavigation/Index";
import { useUser } from '../context/UserContext/index';

const MainRoutes = () => {

  const { user, setUser } = useUser();

  
  const { message } = useMessage();
  function IdPrivateRoute({ children }) {
    return user.token ? (
      <MenuNavigation> {children} </MenuNavigation>
    ) : (
      <Navigate to="/" />
    );
  }

  return (
    <BrowserRouter>
      {message.display && <ModalMessage />}
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/listarFuncionarios"
          element={
            <IdPrivateRoute>
              <EmployeesList />
            </IdPrivateRoute>
          }
        />
        <Route
          path="/listarEquipamentos"
          element={
            <IdPrivateRoute>
              <EquipmentsList />
            </IdPrivateRoute>
          }
        />

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
          element={
            <IdPrivateRoute>
              <AddEditEmployee />
            </IdPrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
