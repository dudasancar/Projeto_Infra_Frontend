import React from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import { listEmployees } from "../../services/Employees/ListEmployees";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Button from '@mui/material/Button';




interface Employee{
  id?: number,
  name?: string,
  email?: string,
  type?: string,
  local?: string,

}

interface Options{
  title: boolean,
  filtering: boolean,
  search: boolean,
  searchAutoFocus: boolean,
  paging: boolean,

}

interface Props{
  

}



const EmployessList = (props: Props) => {



  const [employeesList, setEmployeesList] = React.useState<Employee[]>()

  const handleClick = (() => {
    alert("Fui chamado!")
  })



  React.useEffect(() => {
    listEmployees()
      .then((response?) => setEmployeesList(response))
      .catch((error?) => console.log(error));
  }, []);

  return (
    <div style={{ maxWidth: "80%", margin: "0 auto" }}>
      {employeesList && (
        <MaterialTable
          title="Lista de Funcionarios"
          editable={{
            onRowAdd:()=>new Promise((resolve,reject)=>{

            })
          }}
          columns={[
            { title: "ID", field: "id" },
            { title: "Nome", field: "name" },
            { title: "Email", field: "email" },
            { title: "Cargo", field: "type" },
            { title: "",
              render: () => (
                <Tooltip title="Mais Detalhes">
                  <AssignmentIcon
                    onClick={handleClick}
                    style={{
                      cursor: "pointer",
                      color: "black",
                    }}
                  />
                </Tooltip>
              ),
            },
          ]}
          icons={{
            Add: () => <Button variant="contained">Adicionar</Button>,
          }}
          data={employeesList}
          options={{
            filtering: true,
            search: true,
            paging: false,
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
  );
};

export default EmployessList;
