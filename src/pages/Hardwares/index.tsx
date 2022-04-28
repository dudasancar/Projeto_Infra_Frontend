import React, { useState, useEffect } from "react";
import {
  Content,
  ContentForm,
  SubContent,
  ColumnOne,
  ColumnSecond,
  ColumnThird,
  BtnContent,
  SubForm,
} from "./styles";
import {
  FormControl,
  TextField,
  Button,
  TextareaAutosize,
  MenuItem,
} from "@mui/material";
import { object, string, ref } from "yup";
import { useFormik } from "formik";
import { department, equipament, status } from "./helper";
import { addEquipaments } from "../../services/Equipments/addEquipaments";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { listEditEquipaments } from "../../services/Equipments/listEditEquipaments";
import { editedEquipaments } from "../../services/Equipments/editEquipaments";
import TableUsePrevious from "./TableUserPrevious";
import { listCurrentsCollaborator } from "../../services/Collaborator/listCurrentsCollaborator";

interface Equipament {
  id?: string;
  name: string;
  serial_number: string;
  model: string;
  type: string;
  situation: string;
  status:string,
  collaborator:string,
}

const Hardwares = () => {
  const [editEquipament, setEditEquipament] = React.useState<Equipament>();
  const location = useLocation();
  const { id } = useParams() as any;


const validationSchema = object({
      name:string(),
      serial_number:string(),
      model: string(),
      type: string(),
      situation:string(),
      collaborator:string(),
      status: string(),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name:'',
      serial_number:'',
      model: '',
      type:'',
      situation: '',
      collaborator:'',
      status: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      createEditEquipament(values);
    },
  });

  useEffect(() => {
    if (location.pathname === `/edicaoEquipamentos/${id}`) {
      listEditEquipaments()
        .then((response: any) => {
          formik.setValues(response)
        })
        .catch((err: string) => console.log(err));
    }
  }, []);

// console.log(formik.values)

  const createEditEquipament = (values: any) => {
    if (location.pathname === `/edicaoEquipamentos/${id}` && editEquipament) {
      values.id = editEquipament!.id;
      editedEquipaments(values)
        .then((response: any) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    } else {
      addEquipaments(values)
        .then((response: any) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Content>
      <SubContent>
        {location.pathname === `/edicaoEquipamentos/${id}` ? (
          <h1>Edição de Equipamentos:</h1>
        ) : (
          <h1>Cadastro de Equipamentos:</h1>
        )}
        <ContentForm>
          <form onSubmit={formik.handleSubmit}>
            <SubForm>
              <ColumnOne>
                <FormControl>
                  <TextField
                    select
                    required
                    id="type"
                    name="type"
                    label="Tipo do Equipamento"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.type}
                    onChange={formik.handleChange}
                    error={formik.touched.type && Boolean(formik.errors.type)}
                    helperText={formik.touched.type && formik.errors.type}
                  >
                    {equipament.map((type: any) => (
                      <MenuItem key={type.value} value={type.value}>
                        {type.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>

                <FormControl>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Nome do Equipamento"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </FormControl>

                <FormControl>
                  <TextField
                    required
                    id="serial_number"
                    name="serial_number"
                    label="N° de serie"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.serial_number}
                    onChange={formik.handleChange}
                    error={formik.touched.serial_number && Boolean(formik.errors.serial_number)}
                    helperText={formik.touched.serial_number && formik.errors.serial_number}
                  />
                </FormControl>


                <FormControl>
                  <TextField
                    required
                    id="model"
                    name="model"
                    label="Modelo"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.model}
                    onChange={formik.handleChange}
                    error={formik.touched.model && Boolean(formik.errors.model)}
                    helperText={formik.touched.model && formik.errors.model}
                  />
                </FormControl>
              </ColumnOne>

              <ColumnThird>
                <FormControl>
                  <TextField
                    select
                    required
                    id="collaborator"
                    name="collaborator"
                    label="Colaborador"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.collaborator}
                    onChange={formik.handleChange}
                    error={formik.touched.collaborator && Boolean(formik.errors.collaborator)}
                    helperText={formik.touched.collaborator && formik.errors.collaborator}
                   > 
                     {listCurrentsCollaborator.map((name: any) => (
                      <MenuItem key={name.value} value={name.value}>
                        {name.label}
                      </MenuItem>
                    ))}
                </TextField>
                </FormControl>

                <FormControl>
                   <TextField
                    required
                    id="situation"
                    name="situation"
                    label="Situação"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.situation}
                    onChange={formik.handleChange}
                    error={formik.touched.situation && Boolean(formik.errors.situation)}
                    helperText={formik.touched.situation && formik.errors.situation}
                  />
                </FormControl>

                <FormControl>
                  <TextField
                    select
                    required
                    id="status"
                    name="status"
                    label="Status"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    error={formik.touched.status && Boolean(formik.errors.status)}
                    helperText={formik.touched.status && formik.errors.status}
                  > 
                   {status.map((type: any) => (
                      <MenuItem key={type.value} value={type.value}>
                        {type.label}
                      </MenuItem>
                    ))}
                </TextField> 
                </FormControl>
              </ColumnThird>
            </SubForm>
            
            <BtnContent>
              <Button
                className="btn-cancel"
                onClick={formik.handleReset}
                type="reset"
              >
                Cancelar
              </Button>
              <Button className="btn-salvar" type="submit">
                Salvar
              </Button>
            </BtnContent>
          </form>
        </ContentForm>
      </SubContent>
      {location.pathname === `/edicaoEquipamentos/${id}` ? (
        <TableUsePrevious />
      ) : (
        ""
      )}
    </Content>
  );
};

export default Hardwares;
