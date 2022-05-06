import {
  Box,
  Button,
  MenuItem,
  Modal,
  TextField,
  Tooltip,
} from "@mui/material";
import MaterialTable from "material-table";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMessage } from "../../context/MessageContext";
import { getCollaborator } from "../../services/Collaborators/getCollaborator";
import { AddEquipmentContainer, Container, styleModal } from "./styles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useFormik } from "formik";

import { listEquipments } from "../../services/Equipments/ListEquipments";
import { unLinkEquipments } from "../../services/Equipments/UnlinkEquipment";

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
  const [equipmentToUnlink, setEquipmentToUnlink] =
    React.useState<IEquipment>();
  const [handleUseEffect, setHandleUseEffect] = React.useState<boolean>();
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [otherEquipments, setOtherEquipments] = React.useState<
    IEquipment[] | null
  >();
  const [collaboratorEquipments, setCollaboratorEquipments] = React.useState<
    IEquipment[] | null
  >();

  useEffect(() => {
    getCollaborator(id)
      .then((response: any) => {
        setCollaboratorEquipments(response.data.equipments);
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
        setOtherEquipments(
          response.data.filter(
            (equipment: IEquipment) => equipment.collaborator_id == null
          )
        );
      })
      .catch((err) =>
        setMessage({
          content: `O seguinte erro ocorreu ao buscar os equipamentos vinculados: ${err}`,
          display: true,
          severity: "error",
        })
      );
  }, [handleUseEffect]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      equipment_id: "",
    },
    onSubmit: (values) => {
      


    },
  });

  function handleUnlinkEquipment(equipment: IEquipment) {
    unLinkEquipments(equipment)
      .then(() =>
        setMessage({
          content: `Equipamento desvinculado com sucesso`,
          display: true,
          severity: "success",
        })
      )
      .catch((err) =>
        setMessage({
          content: `O seguinte erro ocorreu ao buscar os equipamentos vinculados: ${err}`,
          display: true,
          severity: "error",
        })
      );
    setOpenModal(false);
    setHandleUseEffect(!handleUseEffect);
  }

 

  return (
    <Container>
      <AddEquipmentContainer>
        <h1>Vincular novo equipamento ao colaborador</h1>
        <form>
          <TextField
            id="equipment_id"
            size="small"
            select
            name="equipment_id"
            label="Equipamento"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={formik.values.equipment_id}
            onChange={formik.handleChange}
          >
            {otherEquipments?.map((equipment) => (
              <MenuItem key={equipment.name} value={equipment.id}>
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
                    onClick={() => {
                      setEquipmentToUnlink(equipment);
                      setOpenModal(true);
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

      {openModal && (
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Box sx={styleModal}>
            <p>Você realmente deseja desvincular o equipamento do usuário?</p>

            <Button
              type="reset"
              value="desvincular"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              CANCELAR
            </Button>
            <Button
              type="submit"
              variant="contained"
              value="desvincular"
              onClick={() => {
                setOpenModal(false);
                handleUnlinkEquipment(equipmentToUnlink!);
              }}
            >
              DESVINCULAR
            </Button>
          </Box>
        </Modal>
      )}
    </Container>
  );
};

export default ListAndLinkEquipmentToCollaborator;
