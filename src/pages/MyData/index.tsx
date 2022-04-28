import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { useUser } from "../../context/UserContext";
import jwt_decode from "jwt-decode";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useMessage } from "../../context/MessageContext";
import { ChangeEmployeePassword } from "../../services/Employees/changeEmployeePassword";
import { Form } from "formik";
import { TextField } from "@mui/material";

interface IEmployee {
  id: string;
  name: string;
  email: string;
  type: string;
  local: string;
}

interface IToken {
  exp: number;
  iat: number;
  id: string;
}

const MyData = () => {
  const { user } = useUser();
  const { setMessage } = useMessage();
  const [employee, setEmployee] = useState<IEmployee>();
  const decryptToken: IToken = jwt_decode(user.token);

  useEffect(() => {
    ChangeEmployeePassword(decryptToken.id)
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

  const validationSchema = object({
    email: string().email("Email inválido").required("E-mail obrigatório"),
    password: string()
      .min(6, "A senha deve possuír no mínimo 8 caracteres")
      .required("Senha obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  return (
    <Container>
      <p>Nome: {user.name}</p>
      <p>E-mail: {user.email}</p>

      <Form>
        <TextField
          fullWidth
          variant="outlined"
          type="text"
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
          variant="outlined"
          type="text"
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
          variant="outlined"
          type="text"
          name="confirmPassword"
          id="confirmPassword"
          label="Senha antiga"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />

        <Button type="submit" variant="contained" fullWidth size="large">
          ENTRAR
        </Button>
      </Form>
    </Container>
  );
};

export default MyData;
