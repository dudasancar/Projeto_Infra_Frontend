import {useEffect, useState} from "react";
import MaterialTable from "material-table";
import { listEmployees } from "../../services/Employees/ListEmployees";
import Tooltip from "@mui/material/Tooltip";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';




interface Employee{
  id?: number,
  name?: string,
  email?: string,
  type?: string,
  local?: string,

}




const EmployessList = () => {



  const [employeesList, setEmployeesList] = useState<Employee[]>()

  const handleClick = (() => {
    alert("Fui chamado!")
  })



  useEffect(() => {
    listEmployees()
      .then((response?) => setEmployeesList(response))
      .catch((error?) => console.log(error));
  }, []);

  return (
    <div style={{ maxWidth: "80%", margin: "0 auto" }}>
      <div>
      {employeesList && (
        <MaterialTable
          title="Lista de Funcionarios"
          columns={[
            { title: "ID", field: "id" },
            { title: "Nome", field: "name" },
            { title: "Email", field: "email" },
            { title: "Cargo", field: "type" },
            { title: "",
              render: () => (
                <div style={{display:"flex"}}>
                <Tooltip title="Mais Detalhes">
                  <AssignmentIcon
                    onClick={handleClick}
                    style={{
                      cursor: "pointer",
                      color: "black",
                    }}
                  />
                </Tooltip>
                <Tooltip title="Mais Detalhes">
                  <DeleteForeverIcon
                    onClick={handleClick}
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
      </div>
      <div>
        <Button>Adicionar</Button>
      </div>
    </div>
  );
};

export default EmployessList;
