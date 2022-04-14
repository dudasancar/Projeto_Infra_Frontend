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

interface Options {
  title: boolean,
  filtering: boolean,
  search: boolean,
  searchAutoFocus: boolean,
  paging: boolean,

}

interface Props {


}



const EquipmentsList = (props: Props): React.ReactElement => {

  const MaterialTable = require("material-table").default;

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
    <div style={{ maxWidth: "100%", margin: "0 auto", fontStyle: "sans-serif" }}>
      {equipmentsList && (
        <MaterialTable
          title="Lista de Equipamentos"
          editable={{
            onRowAdd: () => new Promise((resolve, reject) => {

            })
          }}
          columns={[
            { title: "ID", field: "id", type: "string" },
            { title: "Nome", field: "name" },
            { title: "Modelo", field: "model" },
            { title: "Tipo", field: "type" },
            { title: "Status", field: "stats" },
            { title: "Usuario", field: "user" },
            { title: "Departamento", field: "departament" },
            { title: "Sistema", field: "system" },
            {
              title: "",
              render: () => (
                <>
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
          icons={{
            Add: () => <Button variant="contained">Adicionar</Button>
          }}
          data={equipmentsList}
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

export default EquipmentsList;
