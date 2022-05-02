import { Button, TextField, Tooltip } from "@mui/material";
import MaterialTable from "material-table";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMessage } from "../../context/MessageContext";
import { getCollaborator } from "../../services/Collaborators/getCollaborator";
import { AddEquipmentContainer, Container } from "./styles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

interface IEquipment {
  id: string;
  name: string;
  serial_number: string;
  model: string;
  type: string;
  stituation: string;
  status: string;
  created_at: Date;
  collaborator: {};
}

const ListAndLinkEquipmentToCollaborator = () => {
  const { id } = useParams();
  const { setMessage } = useMessage();
  const [equipments, setEquipments] = React.useState();

  useEffect(() => {
    getCollaborator(id)
      .then((response: any) => {
        setEquipments(response.data.equipments);
      })
      .catch((err) =>
        setMessage({
          content: `O seguinte erro ocorreu ao buscar os equipamentos vinculados: ${err}`,
          display: true,
          severity: "error",
        })
      );
  }, []);

  return (
    <Container>
      <AddEquipmentContainer>
        <h1>Vincular novo equipamento ao colaborador</h1>
        <form>
          <TextField size="small" />

          <Button variant="contained" type="submit" value="SALVAR" >
            VINCULAR
          </Button>
        </form>
      </AddEquipmentContainer>

      {equipments && (
        <MaterialTable
          data={equipments}
          title="Lista de Equipmanetos"
          columns={[
            { title: "Nome", field: "name" },
            { title: "Modelo", field: "model" },
            { title: "Tipo", field: "type" },
            {
              title: "",
              render: (equipment: IEquipment) => (
                <Tooltip title="Inativar">
                  <DeleteForeverIcon
                    style={{
                      cursor: "pointer",
                      color: "red",
                    }}
                  />
                </Tooltip>
              ),
            },
          ]}
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
    </Container>
  );
};

export default ListAndLinkEquipmentToCollaborator;
