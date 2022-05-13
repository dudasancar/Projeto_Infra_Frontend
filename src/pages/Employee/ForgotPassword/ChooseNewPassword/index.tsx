import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { object, string } from "yup";
import { useMessage } from "../../../../context/MessageContext";
import { SetEmployeeNewPassword } from "../../../../services/Employees/ForgotPassword/setEmployeeNewPassword";
import { Container, ContainerForm } from "./styles";

const ChooseNewPassword = () => {
  const { setMessage } = useMessage();
  const { token } = useParams();
  const navigate = useNavigate();

  const setNewPassword = (values: {
    token: string;
    newPassword: string;
    confirmNewPassword: string;
  }) => {
    SetEmployeeNewPassword(values)
      .then(() => {
        setMessage({
          content: "Senha alterada com sucesso",
          display: true,
          severity: "success",
        });
        navigate("/");
      })
      .catch(() => {
        setMessage({
          content: "Ocorreu um erro ao alterar a senha",
          display: true,
          severity: "error",
        });
      });
  };

  const validationSchema = object({
    newPassword: string()
      .min(6, "A senha deve possuír no mínimo 6 caracteres")
      .required("Senha obrigatória"),
    confirmNewPassword: string()
      .min(6, "A senha deve possuír no mínimo 6 caracteres")
      .required("Confirmação da senha obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmNewPassword: "",
      token: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: {
      token: string;
      newPassword: string;
      confirmNewPassword: string;
    }) => {
      values.token = token!;
      setNewPassword(values);
    },
  });

  return (
    <Container>
      <ContainerForm>
        <h1>Escolha sua nova senha</h1>
        <p></p>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            type="password"
            name="newPassword"
            id="newPassword"
            label="Nova senha"
            onChange={formik.handleChange}
            value={formik.values.newPassword}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
          />
          <TextField
            variant="outlined"
            type="password"
            name="confirmNewPassword"
            id="confirmNewPassword"
            label="Confirmar nova senha"
            onChange={formik.handleChange}
            value={formik.values.confirmNewPassword}
            error={
              formik.touched.confirmNewPassword &&
              Boolean(formik.errors.confirmNewPassword)
            }
            helperText={
              formik.touched.confirmNewPassword &&
              formik.errors.confirmNewPassword
            }
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
