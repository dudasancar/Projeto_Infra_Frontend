import React from "react";
import { Route, Routes } from "react-router-dom";
import CollaboratorFormStepper from "../../pages/Collaborator/AddEditCollaborator";
import CollaboratorsList from "../../pages/Collaborator/CollaboratorsList";
import ListAndLinkEquipmentToCollaborator from "../../pages/Collaborator/ListAndLinkEquipmentToCollaborator";
import AddEditEmployee from "../../pages/Employee/AddEditEmployee";
import ChangePassword from "../../pages/Employee/ChangePassword";
import EmployeesList from "../../pages/Employee/EmployeesList";
import EquipmentsList from "../../pages/Equipment/EquipmentsList";

const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path="/meusDados" element={<ChangePassword />} />
        <Route path="/listarFuncionarios" element={<EmployeesList />} />
        <Route path="/listarColaboradores" element={<CollaboratorsList />} />
        <Route path="/listarEquipamentosVinculados/:id" element={<ListAndLinkEquipmentToCollaborator />}/>
        <Route path="/listarEquipamentos" element={<EquipmentsList />} />
        <Route path="/editarFuncionario/:id" element={<AddEditEmployee />} />
        <Route path="/cadastroFuncionario" element={<AddEditEmployee />} />
        <Route path="/editarColaborador/:id" element={<CollaboratorFormStepper />}/>
        <Route path="/cadastroColaborador" element={<CollaboratorFormStepper />}/>
    </Routes>
  );
};

export default PrivateRoutes;
