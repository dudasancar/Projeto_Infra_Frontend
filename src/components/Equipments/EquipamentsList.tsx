import React from "react";
import { listEquipments } from "../../services/Equipments/ListEquipments";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import MaterialTable  from 'material-table';




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



const EquipmentsList = (props: Props) => {

  const MaterialTable = require("material-table").default;

  const [equipmentsList, setEquipmentsList] = React.useState<Equipment[]>()

  const handleClick = (() => {
    alert("Fui chamado!")
  })

  const handleDelete = (() => {
    alert("Fui chamado!")
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
            { title: "Termo de Responsabilidade", field: "term" },
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
                <Tooltip title="Excluir Equipamento">
                <DeleteForeverIcon
                  onClick={handleDelete}
                  style={{
                    cursor: "pointer",
                    color: "black",
                  }}
                />
              </Tooltip>
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
