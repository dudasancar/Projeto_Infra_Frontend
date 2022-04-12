import React from 'react'
import { Container, ContainerButtons, GridForm } from './Style'
import {Button, MenuItem, TextField} from '@mui/material'
import Stack from '@mui/material/Stack';
import {useFormik} from 'formik';
import {object, string}  from 'yup';
import { getUser } from '../../services/getUsers';
import { editUsers } from '../../services/editUsers'
import { useEffect } from 'react';


interface Props {
  setDisplay: boolean
}

interface User {
  id: number,
  name: string, 
  email: string, 
  type: string
};

const AddEditUser = (props: Props) => {

  const [users, setUsers] = React.useState<User>();

  const [OqueFazer, setOqueFazer] = React.useState();



  useEffect(() => {
      getUser()
      .then(response => setUsers(response))
      .catch(error => console.log(error))

  }, [])

  const validationSchema = object({
    name: string().required('Obrigatório'),
    email: string().email('Email inválido').required('Obrigatório'),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name:'',
      email: '',
      userType: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
    
       users && editUsers(users.id, values.name, values.email, values.userType)
       .then((response) => alert(response) 
       
       )
       .catch((err:string) => alert(err))
    }
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
       
            <form onSubmit={formik.handleSubmit}>
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
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}

          />
          <TextField
            variant='outlined'
            type='text'
            name='email'
            id='email'
            label='E-mail'       
            onChange={formik.handleChange}    
            value={formik.values.email}   
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
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
          id='CancelButton' onClick={(e) =>(props.setDisplay)}
          type="reset">CANCELAR</Button>
          <Button
          variant="contained"
          type='submit'
          value='SALVAR'>SALVAR</Button>
          </ContainerButtons>
      </form>
    </Container>
  )
}

export default AddEditUser