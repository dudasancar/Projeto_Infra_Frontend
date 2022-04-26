import React from "react";
import { Container, ContainerButtons, ContainerForm, GridForm } from "./Style";
import {
  Button,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Switch,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { object, string } from "yup";
import { addEmployees } from "../../services/Employees/addEmployees";
import { editEmployees } from "../../services/Employees/editEmployees";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMessage } from "../../context/MessageContext";
import { useNavigate, useParams } from "react-router-dom";
import { listEmployees } from "../../services/Employees/ListEmployees";
import { boolean } from "yup/lib/locale";
interface Employee {
  id: string;
  name: string;
  email: string;
  type: string;
  password: string;
  status: string;
}
let status: string;
const type = [
  {
    value: "Administrador",
    label: "Administrador",
  },
  {
    value: "Departamento Pessoal",
    label: "Departamento Pessoal",
  },
  {
    value: "Infraestrutura",
    label: "Infraestrutura",
  },
  {
    value: "Marketing",
    label: "Marketing",
  },
  {
    value: "Recursos Humanos",
    label: "Recursos Humanos",
  },
];

const AddEditEmployee = () => {
  const [editedEmployee, setEditedEmployee] = React.useState<Employee>();
  const location = useLocation();
  const { setMessage } = useMessage();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (location.pathname == `/editarFuncionario/${id}`) {
      listEmployees()
        .then((response) => {
          setEditedEmployee(response.find((employee) => employee.id == id));
        })
        .catch((err) =>
          setMessage({
            content: `O seguinte erro ocorreu ao buscar os dados do usuário: ${err}`,
            display: true,
            severity: "error",
          })
        );
    }
  }, []);

  const CreateOrEditEmployee = (
    values: {
      name: string;
      email: string;
      type: string;
    },
    status: string
  ) => {
    if (location.pathname == `/editarFuncionario/${id}` && editedEmployee) {
      editEmployees(
        editedEmployee!.id,
        editedEmployee!.password,
        editedEmployee!.status,
        values.name,
        values.email,
        values.type
      )
        .then(() => {
          setMessage({
            content: "Funcionário editado com sucesso!",
            display: true,
            severity: "success",
          });

          navigate("/listarFuncionarios");
        })
        .catch((err: string) =>
          setMessage({
            content: `O seguinte erro ocorreu ao tentar editar o Funcionário: ${err}`,
            display: true,
            severity: "error",
          })
        );
    } else {
      addEmployees(values.name, values.email, values.type, status)
        .then((response) => {
          setMessage({
            content: "Funcionário cadastrado com sucesso!",
            display: true,
            severity: "success",
          });
          navigate("/listarFuncionarios");
        })
        .catch((err: string) =>
          setMessage({
            content: `O seguinte erro ocorreu ao tentar cadastrar o funcionário: ${err}`,
            display: true,
            severity: "error",
          })
        );
    }
  };

  const validationSchema = object({
    name: string().required("O nome é obrigatório"),
    email: string().email("Email inválido").required("E-mail obrigatório"),
    type: string().required("O tipo de usuário é obrigatório"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: editedEmployee
      ? {
          name: editedEmployee!.name,
          email: editedEmployee!.email,
          type: editedEmployee!.type,
          status: true,
        }
      : {
          name: "",
          email: "",
          type: "",
          status: true,
        },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.status == true ? (status = "ativo") : (status = "inativo");
      CreateOrEditEmployee(values, status);
    },
  });

  return (
    <Container>
      <ContainerForm>
        <form onSubmit={formik.handleSubmit}>
          {location.pathname == `/editarFuncionario/${id}` ? (
            <h2>Editar funcionário</h2>
          ) : (
            <h2>Cadastrar novo funcionário</h2>
          )}
          <GridForm>
            <TextField
              variant="outlined"
              type="text"
              name="name"
              id="name"
              label="Nome do funcionário"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              variant="outlined"
              type="text"
              name="email"
              id="email"
              label="E-mail"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              id="type"
              select
              name="type"
              label="Tipo de funcionário"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={formik.values.type}
              onChange={formik.handleChange}
            >
              {type.map((type) => (
                <MenuItem key={type.value} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </TextField>

            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    defaultChecked
                    id="status"
                    name="status"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                  />
                }
                label="Status"
              />
            </FormGroup>
          </GridForm>
          <ContainerButtons>
            <Button
              id="CancelButton"
              onClick={() => navigate("/listarFuncionarios")}
              type="reset"
              size="large"
            >
              CANCELAR
            </Button>
            <Button
              variant="contained"
              type="submit"
              value="SALVAR"
              size="large"
            >
              SALVAR
            </Button>
          </ContainerButtons>
        </form>
      </ContainerForm>
    </Container>
  );
};

export default AddEditEmployee;
