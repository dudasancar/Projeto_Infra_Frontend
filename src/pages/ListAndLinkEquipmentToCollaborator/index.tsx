import { Button, MenuItem, TextField, Tooltip } from "@mui/material";
import MaterialTable from "material-table";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMessage } from "../../context/MessageContext";
import { getCollaborator } from "../../services/Collaborators/getCollaborator";
import { AddEquipmentContainer, Container } from "./styles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useFormik } from "formik";
import { equipament } from "../Hardwares/helper";
import { listEquipments } from "../../services/Equipments/ListEquipments";

interface IEquipment {
  id: string;
  name: string;
  serial_number: string;
  model: string;
  type: string;
  stituation: string;
  status: string;
  created_at: Date;
  collaborator_id: string;
}

const ListAndLinkEquipmentToCollaborator = () => {
  const { id } = useParams();
  const { setMessage } = useMessage();
  const [otherEquipments, setOtherEquipments] = React.useState<
    IEquipment[] | null
  >();
  const [collaboratorEquipments, setCollaboratorEquipments] = React.useState<
    IEquipment[] | null
  >();

  useEffect(() => {
    getCollaborator(id)
      .then((response: any) => {
      setCollaboratorEquipments(response.data.equipments)
      })
      .catch((err) =>
        setMessage({
          content: `O seguinte erro ocorreu ao buscar os equipamentos vinculados: ${err}`,
          display: true,
          severity: "error",
        })   
      );

      listEquipments()
        .then((response: any) => {
         setOtherEquipments(response.data);
        })
        .catch((err) =>
          setMessage({
            content: `O seguinte erro ocorreu ao buscar os equipamentos vinculados: ${err}`,
            display: true,
            severity: "error",
          })
        );
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      equipment: "",
    },
    onSubmit: (values) => {},
  });

  return (
    <Container>
      <AddEquipmentContainer>
        <h1>Vincular novo equipamento ao colaborador</h1>
        <form>
          <TextField
            id="equipment"
            size="small"
            select
            name="equipment"
            label="Equipamento"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={formik.values.equipment}
            onChange={formik.handleChange}
          >
            {otherEquipments?.map((equipment) => (
              <MenuItem key={equipment.name} value={equipment.name}>
                {equipment.name}
              </MenuItem>
            ))}
          </TextField>

          <Button variant="contained" type="submit" value="SALVAR">
            VINCULAR
          </Button>
        </form>
      </AddEquipmentContainer>

      {collaboratorEquipments && (
        <MaterialTable
          data={collaboratorEquipments}
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
      <h3>{id}</h3>
    </Container>
  );
};

export default ListAndLinkEquipmentToCollaborator;
