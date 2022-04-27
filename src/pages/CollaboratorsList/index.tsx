import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaterialTable from "material-table";
import Tooltip from "@mui/material/Tooltip";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalConfirmationHelper from "../../components/ModalConfirmationHelper";
import { useMessage } from "../../context/MessageContext";
import { Button } from "@mui/material";
import { Container } from "./style";
import { listCollaborators } from "../../services/Collaborators/listCollaborators";

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

  return (
    <Container>
      <Button
        variant="contained"
        onClick={() => navigate("/cadastroFuncionario")}
      >
        Cadastrar funcionário
      </Button>
      {collaboratorsList && (
        <MaterialTable
          title="Lista de Colaboradores"
          columns={[
            { title: "Nome", field: "name" },
            { title: "Email", field: "email" },
            { title: "Ocupação", field: "occupation" },
            {
              title: "",
              render: (collaborator: Collaborator) => (
                <div style={{ display: "flex" }}>
                  <Tooltip title="Mais Detalhes">
                    <AssignmentIcon
                      onClick={() => handleClickEmployeeDetail(collaborator.id)}
                      style={{
                        cursor: "pointer",
                        color: "black",
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Inativar">
                    <DeleteForeverIcon
                      onClick={() => {
                        handleOpenModalDeleteConfirmation(collaborator);
                      }}
                      style={{
                        cursor: "pointer",
                        color: "red",
                      }}
                    />
                  </Tooltip>
                </div>
              ),
            },
          ]}
          data={collaboratorsList}
          options={{
            filtering: true,
            search: true,
            paging: true,
            headerStyle: {
              backgroundColor: "#DFDFDF",
              color: "#334B48",
              fontSize: "0.9rem",
              fontStyle: "italic",
              paddingBottom: "1px",
              paddingTop: "1px",
            },
          }}
        />
      )}
      <ModalConfirmationHelper
        open={openDeleteConfirmationModal}
        message={`Atenção!\n\n
              Você Tem certeza que deseja Inativar este colaborador?
              ${userTobeDeleted && userTobeDeleted.name}`}
        onCancel={handleCloseModalDeleteConfirmation}
        onApprove={() => {
          handleDeleteCollaborator();
          handleCloseModalDeleteConfirmation();
        }}
      />
    </Container>
  );
};

export default CollaboratorsList;
