import React from 'react'
import { object, string } from 'yup';
import { useFormik } from 'formik';
import {TextField} from '@mui/material';
import { Container } from './style';

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
        onSubmit: (values)=> {}
      });


  return (
    <Container>


        <div>

            <form>
            <TextField
            variant="outlined"
            type="email"
            name="email"
            id="email"
            label="Nome do usuário"
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
            label="Nome do usuário"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
            </form>
        </div>
    </Container>
  )
}

export default Login