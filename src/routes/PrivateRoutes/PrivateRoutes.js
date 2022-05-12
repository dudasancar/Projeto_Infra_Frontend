import React from "react";
import { Route, Routes } from "react-router-dom";
import CollaboratorFormStepper from "../../pages/Collaborator/AddEditCollaborator";
import CollaboratorsList from "../../pages/Collaborator/CollaboratorsList";
import ListAndLinkEquipmentToCollaborator from "../../pages/Collaborator/ListAndLinkEquipmentToCollaborator";
import AddEditEmployee from "../../pages/Employee/AddEditEmployee";
import ChangePassword from "../../pages/Employee/ChangePassword";
import EmployeesList from "../../pages/Employee/EmployeesList";
import AddEditEquipment from "../../pages/Equipment/AddEditEquipment";
import EquipmentsList from "../../pages/Equipment/EquipmentsList";
import EquipmentHistory from "../../pages/Equipment/EquipmentHistoryList";
import { useUser } from "../../context/UserContext";
import MenuNavigation from "../../components/MenuNavigation";
import NoAccessHelper from "../../components/NoAccessHelper";

const PrivateRoutes = () => {
  const { user } = useUser();

  function PrivateRouteVerification({ children }) {
    return user.token ? (
      <MenuNavigation> {children} </MenuNavigation>
    ) : (
      <NoAccessHelper />
    );
  }

  return (
    <Routes>
      <Route
        path="/meusDados"
        element={
          <PrivateRouteVerification>
            <ChangePassword />
          </PrivateRouteVerification>
        }
      />
      <Route
        path="/listarFuncionarios"
        element={
          <PrivateRouteVerification>
            <EmployeesList />
          </PrivateRouteVerification>
        }
      />
      <Route
        path="/listarColaboradores"
        element={
          <PrivateRouteVerification>
            <CollaboratorsList />
          </PrivateRouteVerification>
        }
      />
      <Route
        path="/listarEquipamentosVinculados/:id"
        element={
          <PrivateRouteVerification>
            <ListAndLinkEquipmentToCollaborator />
          </PrivateRouteVerification>
        }
      />
      <Route
        path="/listarEquipamentos"
        element={
          <PrivateRouteVerification>
            <EquipmentsList />
          </PrivateRouteVerification>
        }
      />
      <Route
        path="/cadastroEquipamento"
        element={
          <PrivateRouteVerification>
            <AddEditEquipment />
          </PrivateRouteVerification>
        }
      />
      <Route
        path="/editarEquipamento/:id"
        element={
          <PrivateRouteVerification>
            <AddEditEquipment />
          </PrivateRouteVerification>
        }
      />
      <Route
        path="/editarFuncionario/:id"
        element={
          <PrivateRouteVerification>
            <AddEditEmployee />
          </PrivateRouteVerification>
        }
      />
      <Route
        path="/cadastroFuncionario"
        element={
          <PrivateRouteVerification>
            <AddEditEmployee />
          </PrivateRouteVerification>
        }
      />
      <Route
        path="/editarColaborador/:id"
        element={
          <PrivateRouteVerification>
            <CollaboratorFormStepper />
          </PrivateRouteVerification>
        }
      />
      <Route
        path="/cadastroColaborador"
        element={
          <PrivateRouteVerification>
            <CollaboratorFormStepper />
          </PrivateRouteVerification>
        }
      />
      <Route
        path="/historicoEquipamento/:id"
        element={
          <PrivateRouteVerification>
            <EquipmentHistory />
          </PrivateRouteVerification>
        }
      />
    </Routes>
  );
};

export default PrivateRoutes;
