import React from "react";
import { listEquipments } from "../../services/Equipments/ListEquipments";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@material-ui/core/Box';
import Typography from '@mui/material/Typography';
import MaterialTable from 'material-table';
import style from './style'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




interface Equipment {
  id: number,
  name: string,
  serial: string,
  model: string,
  type: string,
  stats: string,
  user: string,
  departament: string,
  cpu: string,
  memory: string,
  storage: string,
  system: string,
  office: string,
  lastUser: string,
  fiscalNote: string,
  buyDate: string,
  term: string,
}


const EquipmentsList = () => {

  const [equipmentsList, setEquipmentsList] = React.useState<Equipment[]>()
  const [open, setOpen] = React.useState<boolean>(false)

  const handleClick = (() => {
    alert("Fui chamado!")
  })

  const handleDelete = (() => {
    alert("Fui chamado!")
  })

  const handleOpen = (() => {
    setOpen(true)
  })
  const handleClose = (() => {
    setOpen(false)
  })



  React.useEffect(() => {
    listEquipments()
      .then((response) => setEquipmentsList(response))
      .catch((error) => console.log(error));
  }, []);

  console.log(equipmentsList)

  return (
    <div style={{ maxWidth: "80%", margin: "0 auto", fontStyle: "sans-serif" }}>
      {equipmentsList && (
        <MaterialTable
          title="Lista de Equipamentos"
          columns={[
            { title: "ID", field: "id" },
            { title: "Nome", field: "name" },
            { title: "Tipo", field: "type" },
            { title: "Status", field: "stats" },
            { title: "Usuario", field: "user" },
            { title: "Departamento", field: "departament" },
            {
              title: "",
              render: () => (
                <>
                  <div style={{ display: "flex" }}>
                      <Tooltip title="Mais Detalhes"> 
                        <AssignmentIcon
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
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <div>
                      <h1>Tem certeza que deseja Inativar este item?
                        <p>item name</p>
                      </h1>
                      <Button variant="contained">Inativar</Button>
                      <Button onClick={handleClose} variant="contained">Cancelar</Button>
                    </div>
                  </Modal>

                </>
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
    </div>
  );
};

export default EquipmentsList;
