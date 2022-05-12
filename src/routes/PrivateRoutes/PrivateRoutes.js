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

const PrivateRoutes = () => {
  return (
    <Routes>
       
        <Route path="/meusDados" element={<ChangePassword />} />
        <Route path="/listarFuncionarios" element={<EmployeesList />} />
        <Route path="/listarColaboradores" element={<CollaboratorsList />} />
        <Route path="/listarEquipamentosVinculados/:id" element={<ListAndLinkEquipmentToCollaborator />}/>
        <Route path="/listarEquipamentos" element={<EquipmentsList />} />
        <Route path="/cadastroEquipamento" element={<AddEditEquipment/>}/>
        <Route path="/editarEquipamento/:id" element={<AddEditEquipment/>}/>
        <Route path="/editarFuncionario/:id" element={<AddEditEmployee />} />
        <Route path="/cadastroFuncionario" element={<AddEditEmployee />} />
        <Route path="/editarColaborador/:id" element={<CollaboratorFormStepper />}/>
        <Route path="/cadastroColaborador" element={<CollaboratorFormStepper />}/>
        <Route path="/historicoEquipamento/:id" element={<EquipmentHistory />} />
    </Routes>
  );
};

export default PrivateRoutes;
