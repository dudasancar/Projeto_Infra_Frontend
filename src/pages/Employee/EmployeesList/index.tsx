import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaterialTable from "material-table";
import { listEmployees } from "../../../services/Employees/listEmployees";
import Tooltip from "@mui/material/Tooltip";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalConfirmationHelper from "../../../components/ModalConfirmationHelper";
import { useMessage } from "../../../context/MessageContext";
import { Button } from "@mui/material";
import { Container } from "./style";
import { inactiveEmployee } from "../../../services/Employees/inactiveEmployee";
import React from "react";
interface Employee {
  id: string;
  name: string;
  email: string;
  type: string;
  local: string;
}

const EmployeesList = () => {
  const navigate = useNavigate();
  const { setMessage } = useMessage();

  const [employeesList, setEmployeesList] = useState<Employee[]>();
  const [userTobeDeleted, setUserTobeDeleted] = useState<Employee>();
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState<boolean>(false);

  const handleClickEmployeeDetail = (id: string) => {
    navigate(`/editarFuncionario/${id}`);
  };

  const handleOpenModalDeleteConfirmation = (user: Employee) => {
    setOpenDeleteConfirmationModal(true);
    setUserTobeDeleted(user);
  };
  const handleCloseModalDeleteConfirmation = () => {
    setOpenDeleteConfirmationModal(false);
  };

  const handleDeleteEmployee = () => {
    userTobeDeleted &&
      inactiveEmployee(userTobeDeleted.id)
        .then(() => {
          setMessage({
            content: "Funcionário inativado com sucesso!",
            display: true,
            severity: "success",
          });
          navigate("/listarFuncionarios");
        })
        .catch((err: string) =>
          setMessage({
            content: `O seguinte erro ocorreu ao tentar inativar o funcionário: ${err}`,
            display: true,
            severity: "error",
          })
        );
  };

  useEffect(() => {
    listEmployees()
      .then((response: any) => setEmployeesList(response.data))
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
      {employeesList && (
        <MaterialTable
          title="Lista de Funcionarios"
          columns={[
            { title: "Nome", field: "name" },
            { title: "Email", field: "email" },
            { title: "Cargo", field: "type" },
            {
              title: "",
              render: (employee: Employee) => (
                <div style={{ display: "flex" }}>
                  <Tooltip title="Mais Detalhes">
                    <AssignmentIcon
                      onClick={() => handleClickEmployeeDetail(employee.id)}
                      style={{
                        cursor: "pointer",
                        color: "black",
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Inativar">
                    <DeleteForeverIcon
                      onClick={() => {
                        handleOpenModalDeleteConfirmation(employee);
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
              ${userTobeDeleted && userTobeDeleted.name}`}
        onCancel={handleCloseModalDeleteConfirmation}
        onApprove={() => {
          handleDeleteEmployee();
          handleCloseModalDeleteConfirmation();
        }}
      />
    </Container>
  );
};

export default EmployeesList;
