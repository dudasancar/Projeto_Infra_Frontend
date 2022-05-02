import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMessage } from "../../context/MessageContext";
import { getCollaborator } from "../../services/Collaborators/getCollaborator";
import { listCollaborators } from "../../services/Collaborators/listCollaborators";
import { AddEquipmentContainer, Container } from "./styles";

const ListAndLinkEquipmentToCollaborator = () => {
  const { id } = useParams();
  const { setMessage } = useMessage();
  const [equipments, setEquipments] = React.useState();

  useEffect(() => {
    getCollaborator(id)
      .then((response: any) => {
        setEquipments(response.data.equipments)
      })
      .catch((err) =>
        setMessage({
          content: `O seguinte erro ocorreu ao buscar os dados do usuário: ${err}`,
          display: true,
          severity: "error",
        })
      );
  }, []);

  return (
    <Container>
      <AddEquipmentContainer>
        <form>
          <TextField />

          <Button></Button>
        </form>
      </AddEquipmentContainer>
    </Container>
  );
};

export default ListAndLinkEquipmentToCollaborator;
