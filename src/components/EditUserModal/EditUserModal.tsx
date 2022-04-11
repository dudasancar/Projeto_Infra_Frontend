import React from 'react'
import { Container, ModalForm, ContainerButtons, GridForm } from './Style'
import {Button, MenuItem, TextField} from '@mui/material'
import {useFormik} from 'formik';



const EditUserModal = () => {


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name:'',
      email: '',
      userType: '',
    },
    onSubmit: (values: {name: string, email: string, userType: string} ) => {

    },
  });


  const userType = [
    {
      value: 'administrador',
      label: 'Administrador',
    },
    {
      value: 'departamentoPessoal',
      label: 'Departamento Pessoal',
    },
    {
      value: 'infraestrutura',
      label: 'Infraestrutura',
    },
    {
      value: 'marketing',
      label: 'Marketing',
    },
    {
      value: 'recursosHumanos',
      label: 'Recursos Humanos',
    },
 
  ];


  return (
    <Container>
      <ModalForm>
        <h2>Editar usuário</h2>

        <GridForm>
          <TextField
          variant='outlined'
          type='text'
          name='name'
          id='name'
          label='Nome do usuário'   
          onChange={formik.handleChange}    
          value={formik.values.name}  
          />
          <TextField
               variant='outlined'
               type='text'
               name='email'
               id='email'
               label='E-mail'       
               onChange={formik.handleChange}    
               value={formik.values.email}   
          />
          
          <TextField
              id="userType"
              select
              name="userType"
              label="Tipo de usuário"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={formik.values.userType}
              onChange={formik.handleChange}
          >
            {userType.map((user) => (
            <MenuItem key={user.value} value={user.value}>
              {user.label}
            </MenuItem>
            ))}
          </TextField>
       
        </GridForm>
        <ContainerButtons>
          <Button 
          id='CancelButton'>CANCELAR</Button>
          <Button
          id='SaveButton'>SALVAR</Button>
          </ContainerButtons>
      </ModalForm>


    </Container>
  )
}

export default EditUserModal