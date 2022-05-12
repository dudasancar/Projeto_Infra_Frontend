import React from "react";
import { Container, ContainerButtons, ContainerForm, GridForm } from "./styles";
import { Button, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMessage } from "../../../context/MessageContext";
import { useNavigate, useParams } from "react-router-dom";
import { getEquipment } from "../../../services/Equipments/getEquipaments";
import { listCollaborators } from "../../../services/Collaborators/listCollaborators";
import { ICollaborator } from "../../Collaborator/AddEditCollaborator/interfaces";
import { addEquipment } from "../../../services/Equipments/createEquipment";
import { editEquipment } from "../../../services/Equipments/editEquipment";

interface IEquipment {
  id: string;
  name: string;
  serial_number: string;
  model: string;
  type: string;
  situation: string;
  collaborator_id: string | null;
  status: string;
}
const status = [
  {
    value: "ativo",
    label: "Ativo",
  },
  {
    value: "inativo",
    label: "Inativo",
  },
];

type Params = {
  id: string;
};

const AddEditEquipment = () => {
  const [editedEquipment, setEditedEquipment] = React.useState<IEquipment>();
  const [collaborators, setCollaborators] = React.useState<ICollaborator[]>();
  const location = useLocation();
  const { setMessage } = useMessage();
  const navigate = useNavigate();
  const { id } = useParams<Params>();

  useEffect(() => {
    if (location.pathname == `/editarEquipamento/${id}`) {
      getEquipment(id)
        .then((response: any) => {
          setEditedEquipment(response);
          formik.setValues({
            name: response.name,
            serial_number: response.serial_number,
            type: response.type,
            id: response.id,
            model: response.model,
            situation: response.situation,
            status: response.status,
            collaborator_id: response.collaborator_id,
          });
        })
        .catch((err: any) =>
          setMessage({
            content: `O seguinte erro ocorreu ao buscar os dados do usuário: ${err}`,
            display: true,
            severity: "error",
          })
        );
    }
    listCollaborators()
      .then((response: any) => {
        setCollaborators(response.data);
      })
      .catch((err: any) =>
        setMessage({
          content: `O seguinte erro ocorreu ao buscar os colaboradores: ${err}`,
          display: true,
          severity: "error",
        })
      );
  }, []);

  const handleCreateOrEditEquipment = (values: IEquipment) => {
    if (location.pathname == `/editarEquipamento/${id}` && editedEquipment) {
      console.log(values);
      editEquipment(values)
        .then(() => {
          setMessage({
            content: "Equipamento editado com sucesso!",
            display: true,
            severity: "success",
          });
          navigate("/listarEquipamentos");
        })
        .catch((err: string) =>
          setMessage({
            content: `O seguinte erro ocorreu ao tentar editar o equipamento: ${err}`,
            display: true,
            severity: "error",
          })
        );
    } else {
      console.log(values);
      addEquipment(values)
        .then(() => {
          setMessage({
            content: "Equipamento!",
            display: true,
            severity: "success",
          });
          navigate("/listarEquipamentos");
        })
        .catch((err: string) =>
          setMessage({
            content: `O seguinte erro ocorreu ao tentar cadastrar o equipamento: ${err}`,
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
    initialValues: {
      name: "",
      serial_number: "",
      model: "",
      type: "",
      situation: "",
      status: "",
      id: "",
      collaborator_id: "",
    },
    onSubmit: (values: IEquipment) => {
      if (values.collaborator_id == "Não há vinculação") {
        values.collaborator_id = null;
        values.situation = "Disponível";
      } else {
        values.situation = "Indisponível";
      }
      handleCreateOrEditEquipment(values);
    },
  });

  return (
    <Container>
      <ContainerForm>
        <form onSubmit={formik.handleSubmit}>
          {location.pathname == `/editarEquipamento/${id}` ? (
            <h2>Editar equipamento</h2>
          ) : (
            <h2>Cadastrar novo equipamento</h2>
          )}
          <GridForm>
            <TextField
              variant="outlined"
              type="text"
              name="name"
              id="name"
              label="Nome do equipamento"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              variant="outlined"
              type="text"
              name="model"
              id="model"
              label="Modelo do equipamento"
              onChange={formik.handleChange}
              value={formik.values.model}
              error={formik.touched.model && Boolean(formik.errors.model)}
              helperText={formik.touched.model && formik.errors.model}
            />
            <TextField
              variant="outlined"
              type="text"
              name="type"
              id="type"
              label="Tipo do equipamento"
              onChange={formik.handleChange}
              value={formik.values.type}
              error={formik.touched.type && Boolean(formik.errors.type)}
              helperText={formik.touched.type && formik.errors.type}
            />
            <TextField
              variant="outlined"
              type="text"
              name="serial_number"
              id="serial_number"
              label="Número de série"
              onChange={formik.handleChange}
              value={formik.values.serial_number}
              error={
                formik.touched.serial_number &&
                Boolean(formik.errors.serial_number)
              }
              helperText={
                formik.touched.serial_number && formik.errors.serial_number
              }
            />

            <TextField
              id="status"
              select
              name="status"
              label="Status"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={formik.values.status}
              onChange={formik.handleChange}
            >
              {status.map((status) => (
                <MenuItem key={status.value} value={status.value}>
                  {status.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="collaborator_id"
              select
              disabled={formik.values.status == "inativo" ? true : false}
              name="collaborator_id"
              label="Colaborador vinculado"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={formik.values.collaborator_id}
              onChange={formik.handleChange}
            >
              <MenuItem key="null" value="Não há vinculação">
                Não há vinculação
              </MenuItem>
              {collaborators &&
                collaborators!.map((collaborator) => (
                  <MenuItem key={collaborator.name} value={collaborator.id}>
                    {collaborator.name}
                  </MenuItem>
                ))}
            </TextField>
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

export default AddEditEquipment;
