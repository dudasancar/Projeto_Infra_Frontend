import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import AddEditEmployee from "../pages/AddEditEmployee";
import EmployeesList from "../pages/EmployeesList/index";
import EquipmentsList from "../pages/EquipmentsList/index";
import Login from "../pages/Login";
import ModalMessage from "../components/ModalHelper";
import { useMessage } from "../context/MessageContext";
import MenuNavigation from "../components/MenuNavigation";
import { useUser } from "../context/UserContext/index";
import NoAccessHelper from "../components/NoAccessHelper";
import Hardwares from "../pages/Hardwares";
import TableUsePrevious from "../pages/Hardwares/TableUserPrevious";

const MainRoutes = () => {
  const { user } = useUser();
  const { message } = useMessage();

  function IdPrivateRoute({ children }) {
    return user.token ? (
      <MenuNavigation> {children} </MenuNavigation>
    ) : (
      <NoAccessHelper />
    );
  }

  return (
    <BrowserRouter>
      {message.display && <ModalMessage />}
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tabela" element={<TableUsePrevious />} />
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
