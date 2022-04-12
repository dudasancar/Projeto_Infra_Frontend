import React from 'react';
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table';
import { DragDropContext } from 'react-beautiful-dnd';
import { listEmployees } from '../../services/Employees/ListEmployees';
import { Tittle } from '../../style'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'


const EmployessList = () => {

  const [employeesList, setEmployeesList] = React.useState(null);

  React.useEffect(() => {

    listEmployees()
    .then(response => setEmployeesList(response))
    .catch(error => console.log(error))

  },[])

  console.log(employeesList)



  return (
    <div style={{ maxWidth: '80%', margin: "0 auto", }}>
      <Tittle><VisibilityIcon/>Projeto Infraestrutura<VisibilityIcon/></Tittle>
        {employeesList && <MaterialTable
          title=""
          columns={[
            { title: 'ID', field: 'id' },
            { title: 'Nome', field: 'name' },
            { title: 'Email', field: 'email'},
            { title: 'Cargo', field: 'type' },
            { title: '', render: () => (
              <Tooltip title="Mais Detalhes">
                <AssignmentIcon
                style={{
                  cursor: "pointer",
                  color: "black",
                }}
                alt="Icone de Prancheta"
                />
              </Tooltip>
            )}
          ]}
          data={employeesList}
          options={{ 
            title: false,
            filtering: true,
            search: false,
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
        />}
      </div>
  )
}

export default EmployessList