import React from 'react'
import { object, string } from 'yup';
import { useFormik } from 'formik';

const Login = () => {

    const validationSchema = object({
        email: string().email("Email inválido").required("Obrigatório"),
        password: string().min(8, "No minímo 8 caracteres").required("Obrigatório"),
      });

      const formik = useFormik({
        initialValues: {
            name: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values)=> {}
      });


  return (
    <div>Login</div>
  )
}

export default Login