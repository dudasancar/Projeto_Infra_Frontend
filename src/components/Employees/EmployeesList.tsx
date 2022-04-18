import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import MaterialTable from "material-table";
import { listEmployees } from "../../services/Employees/ListEmployees";
import Tooltip from "@mui/material/Tooltip";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { ContainerModal, Container } from './styles';

interface Employee {
  id?: number;
  name?: string;
  email?: string;
  type?: string;
  local?: string;
}

const EmployessList = () => {
  const [employeesList, setEmployeesList] = useState<Employee[]>();
  const [open, setOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/funcionarioX")
  }
 
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () {
    alert("Colaborador Deletado")
  }

  useEffect(() => {
    listEmployees()
      .then((response?) => setEmployeesList(response))
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
              render: () => (
                <div style={{ display: "flex" }}>
                  <Tooltip title="Mais Detalhes">
                    <AssignmentIcon
                      onClick={handleClick}
                      style={{
                        cursor: "pointer",
                        color: "black",
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Inativar">
                    <DeleteForeverIcon
                      onClick={handleOpen}
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
      <Container>
        <Modal style={{margin: "0 auto", marginTop: "5rem", background: "#ccc", width: "50vw", height: "50vh", borderRadius: "5px"}}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ContainerModal>
            <h1>
              Atenção!<br></br>
              Você Tem certeza que deseja Inativar este Colaborador?
              <p>{employeesList && employeesList[3].name}</p>
            </h1>
            <div>
            <Button style={{width: 150, height: 50}} onClick={() => {handleDelete(); handleClose()}} variant="contained">Inativar</Button>
            <Button style={{width: 150, height: 50}} onClick={handleClose} variant="contained">
              Cancelar
            </Button>
            </div>
          </ContainerModal>
        </Modal>
      </Container>
    </div>
  );
};

export default EmployessList;
