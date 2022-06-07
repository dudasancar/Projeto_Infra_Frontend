import React, { useEffect, useState } from "react";
import { Container, ContainerForm } from "./style";
import { useUser } from "../../../context/UserContext";
import jwt_decode from "jwt-decode";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useMessage } from "../../../context/MessageContext";
import { ChangeEmployeePassword } from "../../../services/Employees/changeEmployeePassword";

import { Button, TextField } from "@mui/material";

interface IToken {
  exp: number;
  iat: number;
  id: string;
}

interface IValues {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
  id: string;
}

const ChangePassword = () => {
  const { user } = useUser();
  const { setMessage } = useMessage();
  const decryptToken: IToken = jwt_decode(user.token);

  const sendChangePasswordRequest = (values: IValues) => {
    ChangeEmployeePassword(values)
      .then((response) => {
        setMessage({
          content: "Senha alterada com sucesso!",
          display: true,
          severity: "success",
        });
      })
      .catch((err: string) =>
        setMessage({
          content: `O seguinte erro ocorreu: ${err}`,hh
          display: true,
          severity: "error",
        })
      );
  };

  const validationSchema = object({
    oldPassword: string()
      .min(6, "A senha antiga deve possuir no mínimo 6 caracteres")
      .required("Senha antiga obrigatória"),
    newPassword: string()
      .min(6, "A nova senha deve possuir no mínimo 6 caracteres")
      .required("Nova senha obrigatória"),
    confirmNewPassword: string()
      .min(6, "A confirmação da nova senha deve possuir no mínimo 6 caracteres")
      .required("Confirmação da senha obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      id: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert("test");
      values.id = decryptToken.id;
      sendChangePasswordRequest(values);
    },
  });

  return (
    <Container>
      <div>
        <h1>Dados da conta</h1>
        <p>Nome: {user.name}</p>
        <p>E-mail: {user.email}</p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <ContainerForm>
          <h2>Deseja mudar sua senha?</h2>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            type="text"
            data-testid="input-oldPassword"
            name="oldPassword"
            id="oldPassword"
            label="Senha antiga"
            onChange={formik.handleChange}
            value={formik.values.oldPassword}
            error={
              formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
            }
            helperText={formik.touched.oldPassword && formik.errors.oldPassword}
          />

          <TextField
            fullWidth
            size="small"
            variant="outlined"
            type="text"
            data-testid="input-newPassword"
            name="newPassword"
            id="newPassword"
            label="Senha nova"
            onChange={formik.handleChange}
            value={formik.values.newPassword}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
          />
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            type="text"
            name="confirmNewPassword"
            data-testid="input-confirmNewPassword"
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

          <Button fullWidth type="submit" variant="contained" size="large">
            CONFIRMAR
          </Button>
        </ContainerForm>
      </form>
    </Container>
  );
};

export default ChangePassword;
