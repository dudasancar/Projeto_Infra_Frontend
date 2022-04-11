import React from 'react'
import { Container, ModalForm } from './Style'
import {Button, TextField} from '@mui/material'


const EditUserModal = () => {
  return (


    <Container>
      <ModalForm>
        <h2>Editar usuário</h2>

        <form>
          <TextField/>
          <TextField/>
          <TextField/>
          <Button>Enviar</Button>
        </form>
      </ModalForm>


    </Container>
  )
}

export default EditUserModal