import React from "react";
import { Container, ContainerButtons, GridForm } from "./Style";
import { Button, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import { object, string } from "yup";
import { getUser } from "../../services/getUsers";
import { addUsers } from "../../services/addUsers";
import { editUsers } from "../../services/editUsers";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface User {
  id: string;
  name: string;
  email: string;
  type: string;
}

interface Props {
  userId: string | null;
}

const userType = [
  {
    value: "administrador",
    label: "Administrador",
  },
  {
    value: "departamentoPessoal",
    label: "Departamento Pessoal",
  },
  {
    value: "infraestrutura",
    label: "Infraestrutura",
  },
  {
    value: "marketing",
    label: "Marketing",
  },
  {
    value: "recursosHumanos",
    label: "Recursos Humanos",
  },
];



const AddEditUser = (props: Props) => {

  const [editedUser, setEditedUser] = React.useState<User>();
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname == "/editarUsuario") {
      getUser()
        .then((response) =>
          setEditedUser(response.find((user) => user.id == props.userId)),
        )
        .catch((error) => console.log(error));
    }
  }, []);

  const CreateOrEditRequest = (values: {name: string, email: string, userType: string}) => {
    location.pathname == "/editarUsuario" && editedUser ? 
    (editUsers(editedUser!.id, values.name, values.email, values.userType)
        .then((response) => alert(response)) 
        .catch((err: string) => alert(err))   
    )
    : 
    (addUsers(values.name, values.email, values.userType)
        .then((response) => alert(response))
        .catch((err: string) => alert(err))
    )
  };

  const validationSchema = object({
    name: string().required("O nome é obrigatório"),
    email: string().email("Email inválido").required("E-mail obrigatório"),
    userType: string().required('O tipo de usuário é obrigatório')
  });
  
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: editedUser
      ? {
          name: editedUser!.name,
          email: editedUser!.email,
          userType: editedUser!.type,
        }
      : {
          name: "",
          email: "",
          userType: "",
        },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      CreateOrEditRequest(values);
    },
  });


  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        {location.pathname == '/editarUsuario' ? (
          <h2>Editar usuário</h2>
        ) : (
          <h2>Cadastrar novo usuário</h2>
        )}

        <GridForm>
          <TextField
            variant="outlined"
            type="text"
            name="name"
            id="name"
            label="Nome do usuário"
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
            id="userType"
            select
            name="userType"
            label="Tipo de usuário"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={formik.values.userType}
            onChange={formik.handleChange}
          >
            {userType.map((user) => (
              <MenuItem key={user.value} value={user.value}>
                {user.label}
              </MenuItem>
            ))}
          </TextField>
        </GridForm>
        <ContainerButtons>
          <Button id="CancelButton" onClick={formik.handleReset} type="reset">
            CANCELAR
          </Button>
          <Button variant="contained" type="submit" value="SALVAR">
            SALVAR
          </Button>
        </ContainerButtons>
      </form>
    </Container>
  );
};

export default AddEditUser;
