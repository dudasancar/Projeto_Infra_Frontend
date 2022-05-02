import { Button, TextField } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import { AddEquipmentContainer, Container } from './styles';

const ListAndLinkEquipmentToCollaborator = () => {
  const { id } = useParams();



  return (
    <Container>


<AddEquipmentContainer>
    <form>

        <TextField/>

        <Button></Button>


<p>DFASJDIADA</p>
    </form>


</AddEquipmentContainer>








    </Container>
  )
}

export default ListAndLinkEquipmentToCollaborator