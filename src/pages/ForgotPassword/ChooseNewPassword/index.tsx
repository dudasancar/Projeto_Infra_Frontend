import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { object, string } from "yup";
import { useMessage } from "../../../context/MessageContext";
import { ChangeEmployeePassword } from "../../../services/Employees/ForgotPassword/forgotPassword";
import { Container, ContainerForm } from "./styles";
import jwt_decode from "jwt-decode";
import { getEmployee } from "../../../services/Employees/getEmployee";

interface IToken {
  exp: number;
  iat: number;
  id: string;
}

interface IEmployee {
  name: string;
  id: string;
  password: string;
  type: string;
  status: string;
  created_at: Date;
}

const ChooseNewPassword = () => {
  const { setMessage } = useMessage();
  const { token } = useParams();
  const navigate = useNavigate();
  const decryptToken = jwt_decode<IToken>(token!);
  const [employee, setEmployee] = React.useState<IEmployee>();

  useEffect(() => {
    getEmployee(decryptToken.id)
      .then((response: any) => {
        setEmployee(response.data);
      })
      .catch((err) =>
        setMessage({
          content: `O seguinte erro ocorreu ao buscar os dados do usuário: ${err}`,
          display: true,
          severity: "error",
        })
      );
  }, []);

  const setNewPassword = (values: {
    id: string;
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  }) => {
    ChangeEmployeePassword(values)
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
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      id: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: {
      id: string;
      oldPassword: string;
      newPassword: string;
     confirmNewPassword: string;
    }) => {
      values.oldPassword = employee!.password;
      values.id = decryptToken.id;
      setNewPassword(values);
    },
  });

  return (
    <Container>
      <ContainerForm>
        <h1>Esolha sua nova senha</h1>
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
            error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
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
              formik.touched.confirmNewPassword && formik.errors.confirmNewPassword
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
