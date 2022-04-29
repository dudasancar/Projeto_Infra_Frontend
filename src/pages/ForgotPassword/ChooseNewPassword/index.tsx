import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { object, string } from "yup";
import { Container, ContainerForm } from "./styles";

const ChooseNewPassword = () => {
  const validationSchema = object({
    password: string()
      .min(6, "A senha deve possuír no mínimo 6 caracteres")
      .required("Senha obrigatória"),
        confirmPassword: string()
      .min(6, "A senha deve possuír no mínimo 6 caracteres")
      .required("Confirmação da senha obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: { password: string, confirmPassword: string}) => {},
  });

  return (
    <Container>
      <ContainerForm>
        <h1>Esolha sua nova senha</h1>
        <p>
    
        </p>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            type="password"
            name="password"
            id="password"
            label="Nova senha"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
              <TextField
            variant="outlined"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            label="Confirmar nova senha"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
          <Button type="submit" variant="contained" size="large">
            ENVIAR
          </Button>
        </form>
      </ContainerForm>
    </Container>
  );
};

export default ChooseNewPassword;
