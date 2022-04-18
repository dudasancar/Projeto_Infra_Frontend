import React from "react";
import { useNavigate } from 'react-router-dom';
import { listEquipments } from "../../services/Equipments/ListEquipments";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import MaterialTable from 'material-table';
import { ContainerModal, Container } from './styles';




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

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/equipamentoX")
  }

  const handleOpen = (() => {
    setOpen(true)
  })
  const handleClose = (() => {
    setOpen(false)
  })

  const handleDelete = () => {
    alert("Equipamento Inativado com Sucesso!")
  }



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
              <p>{equipmentsList && equipmentsList[3].name}</p>
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

export default EquipmentsList;
