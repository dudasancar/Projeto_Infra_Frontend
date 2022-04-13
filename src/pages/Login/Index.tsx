import React from 'react'
import { object, string } from 'yup';
import { useFormik } from 'formik';
import {Button, TextField} from '@mui/material';
import { Container, ContainerLoginForm } from './style';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';

const Login = () => {

    const validationSchema = object({
        email: string().email("Email inválido").required("Obrigatório"),
        password: string().min(8, "No minímo 8 caracteres").required("Obrigatório"),
      });

      const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values)=> {

            


        }
      });


  return (
    <Container>


        <ContainerLoginForm>

            <form>
                <img src={`${logo}`}/>
            <TextField
            variant="outlined"
            type="email"
            name="email"
            id="email"
            label="E-mail"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
           <TextField
            variant="outlined"
            type="text"
            name="password"
            id="password"
            label="Senha"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

            <Link to='/'>Esqueci minha senha</Link>
          <Button type='submit' variant="contained">ENTRAR</Button>
            </form>
        </ContainerLoginForm>
    </Container>
  )
}

export default Login