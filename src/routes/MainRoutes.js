
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import AddEditEmployee from "../pages/AddEditEmployee/Index";
import EmployeesList from '../pages/EmployeesList/index'
import EquipmentsList from '../pages/EquipmentsList/index';
import Login from "../pages/Login/Index";
import ModalMessage from "../components/ModalHelper/Index";
import { useMessage } from "../context/MessageContext/Index";

const MainRoutes = () => {
  const token = false;
  const { message } = useMessage();

  function TokenPrivateRoute({ children }) {
    return token ? children : PublicRoutes;
  }

  function PublicRoutes({ children }) {
    return children;
  }

  return (
    <BrowserRouter>
      {message.display && <ModalMessage />}
      <GlobalStyle />
      <PublicRoutes>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/registro" element={<EmployeesList />} />
      </Routes>
      </PublicRoutes>
      <TokenPrivateRoute>
      <Routes>
        <Route path="/listarFuncionarios" element={<EmployeesList />} />
        <Route path="/listarEquipamentos" element={<EquipmentsList />} />
        <Route path="/editarFuncionario/:id" element={<AddEditEmployee/>}/>
        <Route path="/cadastroFuncionario" element={<AddEditEmployee userId={null} />}/>
      </Routes>
      </TokenPrivateRoute>
    </BrowserRouter>
  );
};

export default MainRoutes;
