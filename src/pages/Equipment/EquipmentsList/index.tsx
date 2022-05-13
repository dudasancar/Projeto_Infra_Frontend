import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaterialTable from "material-table";
import Tooltip from "@mui/material/Tooltip";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalConfirmationHelper from "../../../components/ModalConfirmationHelper";
import { listEquipments } from "../../../services/Equipments/listEquipments";
import { useMessage } from "../../../context/MessageContext";
import { Container } from "./style";
import { Button } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";

interface Equipment {
  id: string;
  name: string;
  email: string;
  type: string;
}

const EquipmentsList = () => {
  const { setMessage } = useMessage();
  const navigate = useNavigate();

  const [equipmentsList, setEquipmentsList] = useState<Equipment[]>();
  const [equipmentTobeDeleted, setEquipmentTobeDeleted] = useState<Equipment>();
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState<boolean>(false);

  const handleClickEquipmentDetail = (id: string) => {
    navigate(`/editarEquipamento/${id}`);
  };

  const handleClickEquipmentHistory = (id: string) => {
    navigate(`/historicoEquipamento/${id}`);
  };

  const handleOpenModalDeleteConfirmation = (equipment: Equipment) => {
    setOpenDeleteConfirmationModal(true);
    setEquipmentTobeDeleted(equipment);
  };
  const handleCloseModalDeleteConfirmation = () => {
    setOpenDeleteConfirmationModal(false);
  };

  const handleDeleteEquipment = () => {
    setMessage({
      content: "Equipamento Inativado com Sucesso",
      display: true,
      severity: "success",
    });
  };

  useEffect(() => {
    listEquipments()
      .then((response: any) => setEquipmentsList(response.data))
      .catch((error) => {
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
        onClick={() => navigate("/cadastroEquipamento")}
      >
        Cadastrar equipamento
      </Button>
      {equipmentsList && (
        <MaterialTable
          title="Lista de Equipamentos"
          columns={[
            { title: "Nome", field: "name" },
            { title: "Modelo", field: "model" },
            { title: "Tipo", field: "type" },
            { title: "Situação", field: "situation" },
            {
              title: "",
              render: (equipment: Equipment) => (
                <div style={{ display: "flex" }}>
                  <Tooltip title="Histórico de Usuários">
                    <HistoryIcon
                      onClick={() => handleClickEquipmentHistory(equipment.id)}
                      style={{
                        cursor: "pointer",
                        color: "black",
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Mais Detalhes">
                    <AssignmentIcon
                      onClick={() => handleClickEquipmentDetail(equipment.id)}
                      style={{
                        cursor: "pointer",
                        color: "black",
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Inativar">
                    <DeleteForeverIcon
                      onClick={() => {
                        handleOpenModalDeleteConfirmation(equipment);
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
          data={equipmentsList}
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
        message={`Você Tem certeza que deseja Inativar este Equipamento?\n
              ${equipmentTobeDeleted && equipmentTobeDeleted.name}`}
        onCancel={handleCloseModalDeleteConfirmation}
        onApprove={() => {
          handleDeleteEquipment();
          handleCloseModalDeleteConfirmation();
        }}
      />
    </Container>
  );
};

export default EquipmentsList;
