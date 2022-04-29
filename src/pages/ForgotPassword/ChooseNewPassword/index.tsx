import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { object, string } from "yup";
import { Container, ContainerForm } from "./styles";

const ChooseNewPassword = () => {
  const validationSchema = object({
    password: string()
      .min(6, "A senha deve possuír no mínimo 8 caracteres")
      .required("Senha obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: { password: string }) => {},
  });

  return (
    <Container>
      <ContainerForm>
        <h1>Esqueceu sua senha?</h1>
        <p>
          Digite o seu e-mail cadastrado para que possamos enviá-lo uma mensagem
          de recuperação
        </p>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            type="password"
            name="password"
            id="password"
            label="E-mail"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button type="submit" variant="contained">
            ENVIAR
          </Button>
        </form>
      </ContainerForm>
    </Container>
  );
};

export default ChooseNewPassword;
