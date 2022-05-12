import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MaterialTable from "material-table";
import Tooltip from "@mui/material/Tooltip";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalConfirmationHelper from "../../../components/ModalConfirmationHelper";
import { useMessage } from "../../../context/MessageContext";
import { Container } from "./styles";
import { getEquipmentHistory } from "../../../services/Equipments/getEquipmentHistory";
import { inactiveEquipment } from "../../../services/Equipments/inactiveEquipment";

interface Equipment {
  id: string;
  name: string;
  email: string;
  type: string;
}

const EquipmentHistory = () => {
  const navigate = useNavigate();
  const { setMessage } = useMessage();
  const { id } = useParams();

  const [equipmentHistory, setEquipmentHistory] = useState<Equipment[]>();
  const [equipmentTobeDeleted, setEquipmentTobeDeleted] = useState<Equipment>();
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState<boolean>(false);

  useEffect(() => {
    getEquipmentHistory(id)
      .then((response: any) => {
        setEquipmentHistory(response.data.collaborators);
      })
      .catch((err) =>
        setMessage({
          content: `O seguinte erro ocorreu ao buscar os dados do equipamento: ${err}`,
          display: true,
          severity: "error",
        }),
      );
  }, []);

  const handleOpenModalDeleteConfirmation = (equipment: Equipment) => {
    setOpenDeleteConfirmationModal(true);
    setEquipmentTobeDeleted(equipment);
  };
  const handleCloseModalDeleteConfirmation = () => {
    setOpenDeleteConfirmationModal(false);
  };

  const handleDeleteEquipment = () => {
    equipmentTobeDeleted &&
      inactiveEquipment(equipmentTobeDeleted.id)
        .then(() => {
          setMessage({
            content: "Equipamento inativado com sucesso!",
            display: true,
            severity: "success",
          });
          navigate("/listarEquipamentos");
        })
        .catch((err: string) =>
          setMessage({
            content: `O seguinte erro ocorreu ao tentar inativar o funcionário: ${err}`,
            display: true,
            severity: "error",
          }),
        );
  };

  return (
    <Container>
      {equipmentHistory && (
        <MaterialTable
          title="Histórico de Usuários"
          columns={[
            { title: "Nome", field: "name" },
            { title: "Email", field: "email" },
            { title: "Cargo", field: "type" },
            {
              title: "",
              render: (equipment: Equipment) => (
                <div style={{ display: "flex" }}>
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
          data={equipmentHistory}
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
              Você Tem certeza que deseja Inativar este Funcionário?
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

export default EquipmentHistory;
