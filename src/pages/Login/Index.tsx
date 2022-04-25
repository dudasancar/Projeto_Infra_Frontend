import { object, string } from "yup";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { Container, ContainerLoginForm } from "./style";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useMessage } from "../../context/MessageContext/Index";
import { authLogin } from "../../services/AuthLogin/Auth";
import { useUser } from "../../context/UserContext/index";

const Login = () => {
  const { setMessage } = useMessage();
  const { user, setUser } = useUser();

  const setUserContext = (response: any) => {
    setUser({
      name: response.data.employee.name,
      email: response.data.employee.email,
      token: response.data.token,
    });
  };

  let navigate = useNavigate();
  const validationSchema = object({
    email: string().email("Email inválido").required("E-mail obrigatório"),
    password: string()
      .min(8, "A senha deve possuír no mínimo 8 caracteres")
      .required("Senha obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: { email: string; password: string }) => {
      await authLogin(values)
        .then((response: any) => {
          setUserContext(response);
          setMessage({
            content: "Login efetuado com sucesso!",
            display: true,
            severity: "success",
          });
          navigate("/listarFuncionarios");
        })
        .catch((error) => {
          setMessage({
            content: "Ocorreu um erro ao tentar efetuar o login!",
            display: true,
            severity: "error",
          })
        }
        );
    },
  });

  return (
    <Container>
      <ContainerLoginForm>
        <form onSubmit={formik.handleSubmit}>
          <img src={`${logo}`} />
          <TextField
            fullWidth
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
          <TextField
            fullWidth
            variant="outlined"
            type="text"
            name="password"
            id="password"
            label="Senha"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Link to="/">Esqueci minha senha</Link>
          <Button type="submit" variant="contained" fullWidth size="large">
            ENTRAR
          </Button>
        </form>
      </ContainerLoginForm>
    </Container>
  );
};

export default Login;
