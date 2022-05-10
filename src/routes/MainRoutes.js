import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import CollaboratorsList from "../pages/CollaboratorsList";
import SendEmail from "../pages/ForgotPassword/SendEmail";
import ChooseNewPassword from "../pages/ForgotPassword/ChooseNewPassword";
import ListAndLinkEquipmentToCollaborator from "../pages/ListAndLinkEquipmentToCollaborator";
import MyData from "../pages/MyData";
import AddEditCollaborator from "../pages/AddEditCollaborator";

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
        <Route path="/esqueciSenha" element={<SendEmail />} />
        <Route path="/recuperarSenha/:token" element={<ChooseNewPassword />} />

        <Route
          path="/meusDados"
          element={
            <IdPrivateRoute>
              <MyData />
            </IdPrivateRoute>
          }
        />
        <Route
          path="/listarFuncionarios"
          element={
            <IdPrivateRoute>
              <EmployeesList />
            </IdPrivateRoute>
          }
        />
        <Route
          path="/listarColaboradores"
          element={
            <IdPrivateRoute>
              <CollaboratorsList />
            </IdPrivateRoute>
          }
        />
        <Route
          path="/listarEquipamentosVinculados/:id"
          element={
            <IdPrivateRoute>
              <ListAndLinkEquipmentToCollaborator />
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
          path="/editarColaborador/:id"
          element={
            <IdPrivateRoute>
              <AddEditCollaborator />
            </IdPrivateRoute>
          }
        />
        <Route
          path="/cadastroColaborador"
          element={
            <IdPrivateRoute>
              <AddEditCollaborator />
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
        <Route
          path="/cadastroEquipamento"
          element={
            <IdPrivateRoute>
              <Hardwares />
            </IdPrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
