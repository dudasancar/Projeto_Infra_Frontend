import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { object, string } from "yup";
import { Container, ContainerForm } from "./styles";
import { useNavigate } from "react-router-dom";

const SendEmail = () => {
  const navigate = useNavigate();
  const validationSchema = object({
    email: string().email("Email inválido").required("E-mail obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: { email: string }) => {
      navigate("/escolherNovaSenha")
    },
  });

  return (
    <Container>
      <ContainerForm>
        <h1>Esqueceu sua senha?</h1>
        <p>
          Digite o seu e-mail cadastrado para que possamos enviar uma mensagem
          de recuperação
        </p>
        <form onSubmit={formik.handleSubmit}>
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
          <Button type="submit" variant="contained">
            ENVIAR
          </Button>
        </form>
      </ContainerForm>
    </Container>
  );
};

export default SendEmail;
