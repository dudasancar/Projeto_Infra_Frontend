import React from "react";
import { Container, ContainerButtons, ContainerForm, GridForm } from "./Style";
import { Button, MenuItem, TextField } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useFormik } from "formik";
import { addEmployees } from "../../services/Employees/addEmployees";
import { editEmployees } from "../../services/Employees/editEmployees";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMessage } from "../../context/MessageContext";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployee } from "../../services/Employees/getEmployee";
import CollaboratorFormStepper from "../../components/CollaboratorFormStepper";
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker} from "@material-ui/pickers";
  
  import DateFnsUtils from "@date-io/date-fns";
import { ICollaborator } from "./interfaces";
import { initialValues, validationSchema } from "./validation";


const AddEditCollaborator = () => {
  const [editedCollaborator, setEditedCollaborator] = React.useState<ICollaborator>();
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

  const CreateOrEditEmployee = (values: ICollaborator) => {
    if (location.pathname == `/editarColaborador/${id}` && editedCollaborator) {
      console.log(editedCollaborator.id);
      values.id = editedCollaborator!.id;
      editEmployees(values)
        .then(() => {
          setMessage({
            content: "Colaborador editado com sucesso!",
            display: true,
            severity: "success",
          });
          navigate("/listarColaboradores");
        })
        .catch((err: string) =>
          setMessage({
            content: `O seguinte erro ocorreu ao tentar editar o Colaborador: ${err}`,
            display: true,
            severity: "error",
          })
        );
    } else {
      addEmployees(values.name, values.email, values.type)
        .then(() => {
          setMessage({
            content: "Colaborador cadastrado com sucesso!",
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

  

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      CreateOrEditEmployee(values);
    },
  });

  return (
    <Container>
        <CollaboratorFormStepper/>
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
              name="contract"
              id="contract"
              label="Contrato"
              onChange={formik.handleChange}
              value={formik.values.contract}
              error={formik.touched.contract && Boolean(formik.errors.contract)}
              helperText={formik.touched.contract && formik.errors.contract}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  id="date-picker-dialog"
                  label="teste"
                  inputVariant="outlined"
                  format="MM/dd/yyyy"
                  value={formik.values.date}
                  onChange={value => formik.setFieldValue("date", value)}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider>
            <TextField
              variant="outlined"
              type="text"
              name="situation"
              id="situation"
              label="Situação"
              onChange={formik.handleChange}
              value={formik.values.situation}
              error={formik.touched.situation && Boolean(formik.errors.situation)}
              helperText={formik.touched.situation && formik.errors.situation}
            />
              <TextField
              variant="outlined"
              type="Date"
              name="admission"
              id="admission"
              label="Data de Admissao"
              onChange={formik.handleChange}
              value={formik.values.admission}
              error={formik.touched.admission && Boolean(formik.errors.admission)}
              helperText={formik.touched.admission && formik.errors.admission}
            />
              <TextField
              variant="outlined"
              type="text"
              name="occupation"
              id="occupation"
              label="Ocupacao"
              onChange={formik.handleChange}
              value={formik.values.occupation}
              error={formik.touched.occupation && Boolean(formik.errors.occupation)}
              helperText={formik.touched.occupation && formik.errors.occupation}
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

export default AddEditCollaborator;
