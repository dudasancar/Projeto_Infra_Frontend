import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaterialTable from "material-table";
import ModalConfirmationHelper from "../../../components/ModalConfirmationHelper";
import { listEquipments } from "../../../services/Equipments/listEquipments";
import { useMessage } from "../../../context/MessageContext";
import { Container } from "./style";
import { Button } from "@mui/material";
import { IEquipment } from "../../../interfaces/equipment";
import { columns } from "./columns";

const EquipmentsList = () => {
  const { setMessage } = useMessage();
  const navigate = useNavigate();
  const options = { hour: "numeric", minute: "numeric" };

  const [equipmentsList, setEquipmentsList] = useState<IEquipment[]>();
  const [equipmentTobeDeleted, setEquipmentTobeDeleted] =
    useState<IEquipment>();
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState<boolean>(false);

  const handleClickEquipmentDetail = (id: string) => {
    navigate(`/editarEquipamento/${id}`);
  };

  const handleClickEquipmentHistory = (id: string) => {
    navigate(`/historicoEquipamento/${id}`);
  };

  const handleOpenModalDeleteConfirmation = (equipment: IEquipment) => {
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
          columns={columns(
            options,
            handleClickEquipmentHistory,
            handleClickEquipmentDetail,
            handleOpenModalDeleteConfirmation
          )}
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
