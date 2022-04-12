import React from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import { listEmployees } from "../../services/Employees/ListEmployees";
import { Tittle } from "../../style";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import Stack from '@mui/material/Stack';
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



  React.useEffect(() => {
    listEmployees()
      .then((response?) => setEmployeesList(response))
      .catch((error?) => console.log(error));
  }, []);

  return (
    <div style={{ maxWidth: "80%", margin: "0 auto" }}>
      <Tittle>
        <VisibilityIcon />
        Projeto Infraestrutura
        <VisibilityIcon />
      </Tittle>
      {employeesList && (
        <MaterialTable
          editable={{
            onRowAdd:()=>new Promise((resolve,reject)=>{

            })
          }}
          title=""
          columns={[
            { title: "ID", field: "id" },
            { title: "Nome", field: "name" },
            { title: "Email", field: "email" },
            { title: "Cargo", field: "type" },
            {
              title: "",
              render: () => (
                <Tooltip title="Mais Detalhes">
                  <AssignmentIcon
                    style={{
                      cursor: "pointer",
                      color: "black",
                    }}
                    alt="Icone de Prancheta"
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
            title: false,
            filtering: true,
            search: true,
            searchAutoFocus: true,
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
