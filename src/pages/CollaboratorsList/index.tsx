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
import { inactiveCollaborator } from "../../services/Collaborators/inactiveCollaborator";
import { getCollaborator } from "../../services/Collaborators/getCollaborators";

import DevicesIcon from "@mui/icons-material/Devices";
interface Collaborator {
  id: string;
  name: string;
  contract: string;
  situation: string;
  start: Date;
  admission: string;
  occupation: string;
  payment: string;
  cost_center: string;
  MEI: string;
  hours: string;
  city: string;
  coordinator: string;
  contact: string;
  birth: Date;
  CPF: number;
  identity: string;
  schooling: string;
  mother: string;
  sons: string;
  emergency_contact: string;
  responsible_emergency: string;
  address: string;
  email: string;
  status: string;
  equipment_id: string;
}

const CollaboratorsList = () => {
  const navigate = useNavigate();
  const { setMessage } = useMessage();

  const [collaboratorsList, setCollaboratorsList] = useState<Collaborator[]>();
  const [userTobeDeleted, setUserTobeDeleted] = useState<Collaborator>();
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState<boolean>(false);

  const handleClickCollaboratorDetail = (id: string) => {
    navigate(`/editarColaborador/${id}`);
  };
  const handleClickLinkedEquipments = (id: string) => {
    navigate(`/listarEquipamentosVinculados/${id}`);
  };

  const handleOpenModalDeleteConfirmation = (user: Collaborator) => {
    setOpenDeleteConfirmationModal(true);
    setUserTobeDeleted(user);
  };
  const handleCloseModalDeleteConfirmation = () => {
    setOpenDeleteConfirmationModal(false);
  };

  const handleDeleteCollaborator = () => {
    userTobeDeleted &&
      inactiveCollaborator(userTobeDeleted.id)
        .then(() => {
          setMessage({
            content: "Colaborador inativado com sucesso!",
            display: true,
            severity: "success",
          });
          navigate("/listarColaboradores");
        })
        .catch((err: string) =>
          setMessage({
            content: `O seguinte erro ocorreu ao tentar inativar o colaborador: ${err}`,
            display: true,
            severity: "error",
          })
        );
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
        onClick={() => navigate("/cadastroColaborador")}
      >
        Cadastrar colaborador
      </Button>
      {collaboratorsList && (
        <MaterialTable
          title="Lista de Colaboradores"
          columns={[
            { title: "Nome", field: "name" },
            { title: "Email", field: "email" },
            { title: "Ocupação", field: "occupation" },
            {
              title: "Data de início",
              render: (collaborator: Collaborator) =>
                new Date(collaborator.start).toLocaleDateString("pt-BR"),
              field: "start",
            },
            { title: "Contato", field: "contact" },
            { title: "Endereço", field: "address" },
            { title: "Computador", field: "computer" },
            {
              title: "",
              render: (collaborator: Collaborator) => (
                <div style={{ display: "flex", gap: "2px" }}>
                  <Tooltip title="Equipamentos vinculados">
                    <DevicesIcon
                      onClick={() =>
                        handleClickLinkedEquipments(collaborator.id)
                      }
                      style={{
                        marginRight: "5px",
                        cursor: "pointer",
                        color: "black",
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Mais Detalhes">
                    <AssignmentIcon
                      onClick={() =>
                        handleClickCollaboratorDetail(collaborator.id)
                      }
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
