import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaterialTable from "material-table";
import Tooltip from "@mui/material/Tooltip";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalConfirmationHelper from "../../components/ModalConfirmationHelper";
import { listEquipments } from "../../services/Equipments/ListEquipments";

interface Equipment {
  id: string;
  name?: string;
  email?: string;
  type?: string;
  local?: string;
}

const EquipmentsList = () => {
  const navigate = useNavigate();

  const [equipmentsList, setEquipmentsList] = useState<Equipment[]>();
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState<boolean>(false);

  const handleClickEquipmentDetail = (id: string) => {
    navigate(`/editarfuncionario/${id}`);
  };

  const handleOpenModalDeleteConfirmation = () => {
    setOpenDeleteConfirmationModal(true);
  };
  const handleCloseModalDeleteConfirmation = () => {
    setOpenDeleteConfirmationModal(false);
  };

  const handleDeleteEmployee = () => {
    alert("Colaborador Inativado com Sucesso!");
  };

  useEffect(() => {
    listEquipments()
      .then((response: any) => setEquipmentsList(response))
      .catch((error) => console.log(error));
  }, []);

  console.log(equipmentsList)

  return (
    <div style={{ maxWidth: "80%", margin: "0 auto" }}>
      {equipmentsList && (
        <MaterialTable
          title="Lista de Funcionarios"
          columns={[
            { title: "ID", field: "id" },
            { title: "Nome", field: "name" },
            { title: "Email", field: "email" },
            { title: "Cargo", field: "type" },
            {
              title: "",
              render: ({ id }: Equipment) => (
                <div style={{ display: "flex" }}>
                  <Tooltip title="Mais Detalhes">
                    <AssignmentIcon
                      onClick={() => handleClickEquipmentDetail(id)}
                      style={{
                        cursor: "pointer",
                        color: "black",
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Inativar">
                    <DeleteForeverIcon
                      onClick={handleOpenModalDeleteConfirmation}
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
        message={`Atenção!\n\n
              Você Tem certeza que deseja Inativar este Funcionário?
              ${equipmentsList && equipmentsList[3].name}`}
        onCancel={handleCloseModalDeleteConfirmation}
        onApprove={() => {
          handleDeleteEmployee();
          handleCloseModalDeleteConfirmation();
        }}
      />
    </div>
  );
};

export default EquipmentsList;
