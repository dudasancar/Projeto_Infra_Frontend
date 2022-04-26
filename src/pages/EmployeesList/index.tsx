import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaterialTable from "material-table";
import { listEmployees } from "../../services/Employees/ListEmployees";
import Tooltip from "@mui/material/Tooltip";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalConfirmationHelper from "../../components/ModalConfirmationHelper";
import { useMessage } from "../../context/MessageContext/Index";

interface Employee {
  id: string;
  name?: string;
  email?: string;
  type?: string;
  local?: string;
}

const EmployeesList = () => {
  const navigate = useNavigate();
  const { setMessage } = useMessage();

  const [employeesList, setEmployeesList] = useState<Employee[]>();
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState<boolean>(false);

  const handleClickEmployeeDetail = (id: string) => {
    navigate(`/editarFuncionario/${id}`);
  };

  const handleOpenModalDeleteConfirmation = () => {
    setOpenDeleteConfirmationModal(true);
  };
  const handleCloseModalDeleteConfirmation = () => {
    setOpenDeleteConfirmationModal(false);
  };

  const handleDeleteEmployee = () => {
    setMessage({
      content: "Funcionário Inativado com Sucesso",
      display: true,
      severity: "success",
    });
  };

  useEffect(() => {
    listEmployees()
      .then((response: any) => setEmployeesList(response))
      .catch((error?) => console.log(error));
  }, []);

  return (
    <div style={{ maxWidth: "80%", margin: "0 auto" }}>
      {employeesList && (
        <MaterialTable
          title="Lista de Funcionarios"
          columns={[
            { title: "ID", field: "id" },
            { title: "Nome", field: "name" },
            { title: "Email", field: "email" },
            { title: "Cargo", field: "type" },
            {
              title: "",
              render: ({ id }: Employee) => (
                <div style={{ display: "flex" }}>
                  <Tooltip title="Mais Detalhes">
                    <AssignmentIcon
                      onClick={() => handleClickEmployeeDetail(id)}
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
          data={employeesList}
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
              ${employeesList && employeesList[3].name}`}
        onCancel={handleCloseModalDeleteConfirmation}
        onApprove={() => {
          handleDeleteEmployee();
          handleCloseModalDeleteConfirmation();
        }}
      />
    </div>
  );
};

export default EmployeesList;
