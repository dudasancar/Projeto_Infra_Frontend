import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaterialTable from "material-table";
import { listEmployees } from "../../services/Employees/ListEmployees";
import Tooltip from "@mui/material/Tooltip";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalConfirmationHelper from "../../components/ModalConfirmationHelper";
import { useMessage } from "../../context/MessageContext";
import { Button } from "@mui/material";
import { Container } from "./style";

interface Collaborator {
  id: string;
  name: string;
  email: string;
  type: string;
  local: string;
}

const CollaboratorsList = () => {
  const navigate = useNavigate();
  const { setMessage } = useMessage();

  const [collaboratorsList, setCollaboratorsList] = useState<Collaborator[]>();
  const [userTobeDeleted, setUserTobeDeleted] = useState<Collaborator>();
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState<boolean>(false);

  const handleClickEmployeeDetail = (id: string) => {
    navigate(`/editarColaborador/${id}`);
  };

  const handleOpenModalDeleteConfirmation = (user: Collaborator) => {
    setOpenDeleteConfirmationModal(true);
    setUserTobeDeleted(user);
  };
  const handleCloseModalDeleteConfirmation = () => {
    setOpenDeleteConfirmationModal(false);
  };

   const handleDeleteCollaborator = () => {
     setMessage({
       content: "Funcionário Inativado com Sucesso",
       display: true,
       severity: "success",
     });
   };

   useEffect(() => {
     listCollaborators()
       .then((response: any) => setCollaboratorsList(response.data))
       .catch((error?) => {
         setMessage({
           content: "Ocorreu um erro ao tentar carregar a tabela!",
           display: true,
           severity: "error",
         });
       });
   }, []);


  return <div>index</div>;
};

export default CollaboratorsList;
