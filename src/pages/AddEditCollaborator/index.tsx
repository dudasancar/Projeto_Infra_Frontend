import React from "react";
import { Container, ContainerButtons, ContainerForm, GridForm } from "./Style";
import { Button, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import { object, string } from "yup";
import { addEmployees } from "../../services/Employees/addEmployees";
import { editEmployees } from "../../services/Employees/editEmployees";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMessage } from "../../context/MessageContext";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployee } from "../../services/Employees/getEmployee";


interface IEmployee {
  id: string | null;
  name: string;
  email: string;
  type: string;
  password?: string;
}

const type = [
  {
    value: "administrador",
    label: "Administrador",
  },
  {
    value: "dp",
    label: "Departamento Pessoal",
  },
  {
    value: "infra",
    label: "Infraestrutura",
  },
  {
    value: "marketing",
    label: "Marketing",
  },
  {
    value: "rh",
    label: "Recursos Humanos",
  },
];

const AddEditEmployee = () => {
  const [editedCollaborator, setEditedCollaborator] = React.useState<IEmployee>();
  const location = useLocation();
  const { setMessage } = useMessage();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (location.pathname == `/editarColaborador/${id}`) {
      getEmployee(id)
        .then((response: any) => {
          setEditedCollaborator(response.data);
          console.log(response.data);
          formik.setValues({
            name: response.data.name,
            email: response.data.email,
            type: response.data.type,
            id: null,
          });
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

  const CreateOrEditEmployee = (values: IEmployee) => {
    if (location.pathname == `/editarColaborador/${id}` && editedCollaborator) {
      console.log(editedCollaborator.id);
      values.id = editedCollaborator!.id;
      editEmployees(values)
        .then(() => {
          setMessage({
            content: "Funcionário editado com sucesso!",
            display: true,
            severity: "success",
          });
          navigate("/listarColaboradores");
        })
        .catch((err: string) =>
          setMessage({
            content: `O seguinte erro ocorreu ao tentar editar o Funcionário: ${err}`,
            display: true,
            severity: "error",
          })
        );
    } else {
      addEmployees(values.name, values.email, values.type)
        .then(() => {
          setMessage({
            content: "Funcionário cadastrado com sucesso!",
            display: true,
            severity: "success",
          });
          navigate("/listarColaborador");
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
    contract: string().required("contato inválido").required("Contato obrigatório"),
    situation: string().required("O tipo da situacao e obrigatoria"),
    start:string(),
    admission:string(),
    occupation:string(),
    computer:string(),
    payment:string(),
    cost_center:string(),
    MEI:string(),
    hours:string(),
    city:string(),
    coordinator:string(),
    contact:string(),
    birth:string(),
    CPF:string(),
    identity:string(),
    schooling:string(),
    mother:string(),
    sons:string(),
    emergency_contact:string(),
    responsible_emergency:string(),
    address:string(),
    email:string(),
    status:string(),
    equipment_id:string(),
    
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      contract: "",
      situation: "",
      start:"",
      admission:"",
      occupation:"",
      computer:"",
      payment:"",
      cost_center:"",
      MEI:"",
      hours:"",
      city:"",
      coordinator:"",
      contact:"",
      birth:"",
      CPF:"",
      identity:"",
      schooling:"",
      mother:"",
      sons:"",
      emergency_contact:"",
      responsible_emergency:"",
      address:"",
      email:"",
      status:"",
      equipment_id:"",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      CreateOrEditEmployee(values);
    },
  });

  return (
    <Container>
      <ContainerForm>
        <form onSubmit={formik.handleSubmit}>
          {location.pathname == `/editarColaborador/${id}` ? (
            <h2>Editar Colaborador</h2>
          ) : (
            <h2>Cadastrar novo Colaborador</h2>
          )}
          <GridForm>
            <TextField
              variant="outlined"
              type="text"
              name="name"
              id="name"
              label="Nome do Colaborador"
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
          </GridForm>
          <ContainerButtons>
            <Button
              id="CancelButton"
              onClick={() => navigate("/listarColaboradores")}
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
