import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { object, string } from "yup";
import { Container, ContainerForm } from "./styles";
import { useNavigate } from "react-router-dom";
import { sendEmailRequest } from "../../../services/Employees/ForgotPassword/sendEmailRequest";
import { useMessage } from "../../../context/MessageContext";

const SendEmail = () => {
  const navigate = useNavigate();
  const { setMessage } = useMessage();
  const validationSchema = object({
    email: string().email("Email inválido").required("E-mail obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: { email: string }) => {
      sendEmailRequest(values)
        .then(() => {
          setMessage({
            content: "E-mail enviado com sucesso",
            display: true,
            severity: "success",
          });
           navigate("/");
        })
        .catch(() => {
          setMessage({
            content: "Ocorreu um erro ao enviar o e-mail",
            display: true,
            severity: "error",
          });
        });
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
