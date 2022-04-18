import React, { useState } from "react";
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
import { equipament } from "./List";
import { department } from "./List";
import { addEquipaments } from "../services/addEquipaments";

const Hardwares = () => {
  const [baseFileInvoice, setBaseFileInvoice] = useState<any>("");
  const [baseFileTerm, setBaseFileTerm] = useState<any>("");

  const uploadFileInvoice = async (event: any) => {
    const file = event.target.files[0];
    const base64 = await convert64(file);
    setBaseFileInvoice(base64);
  };

  const uploadFileTerm = async (event: any) => {
    const file = event.target.files[0];
    const base64 = await convert64(file);
    setBaseFileTerm(base64);
  };

  const convert64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
    });
  };

  const validationSchema = object({
    equipamentType: string().required("Obrigatorio"),
    name: string().required("Obrigatorio"),
    equipamentModel: string().required("Obrigatorio"),
    serieNumber: string().required("Obrigatorio"),
    currentUser: string().required("Obrigatorio"),
    previousUser: string().required("Obrigatorio"),
    department: string().required("Obrigatorio"),
    situation: string().required("Obrigatorio"),
    buyDate: string().required("Obrigatorio"),
    invoice: string(),
    term: string(),
    deliveryDate: string().required("Obrigatorio"),
  });

  const formik = useFormik({
    initialValues: {
      equipamentType: "",
      name: "",
      equipamentModel: "",
      serieNumber: "",
      currentUser: "",
      previousUser: "",
      department: "",
      situation: "",
      buyDate: "",
      invoice: "",
      term: "",
      deliveryDate: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      addEquipaments(
        values.equipamentType,
        values.name,
        values.equipamentModel,
        values.serieNumber,
        values.currentUser,
        values.previousUser,
        values.department,
        values.situation,
        values.buyDate,
        values.invoice,
        values.term,
        values.deliveryDate,
        values.description,
      )
        .then((response) => alert(response))
        .catch((err: string) => alert(err));
    },
  });

  return (
    <Content>
      <SubContent>
        <h1>Cadastro de Equipamentos:</h1>
        <ContentForm>
          <form onSubmit={formik.handleSubmit}>
            <SubForm>
              <ColumnOne>
                <FormControl>
                  <TextField
                    select
                    id="equipamentType"
                    name="equipamentType"
                    label="Tipo de Equipamento"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.equipamentType}
                    onChange={formik.handleChange}
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
                    id="equipamentModel"
                    name="equipamentModel"
                    label="Modelo do Equipamento"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.equipamentModel}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.equipamentModel &&
                      Boolean(formik.errors.equipamentModel)
                    }
                    helperText={
                      formik.touched.equipamentModel &&
                      formik.errors.equipamentModel
                    }
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    required
                    id="serieNumber"
                    name="serieNumber"
                    label="N° de serie"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.serieNumber}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.serieNumber &&
                      Boolean(formik.errors.serieNumber)
                    }
                    helperText={
                      formik.touched.serieNumber && formik.errors.serieNumber
                    }
                  />
                </FormControl>
              </ColumnOne>

              <ColumnSecond>
                <FormControl>
                  <TextField
                    required
                    id="currentUser"
                    name="currentUser"
                    label="Usuário Atual"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.currentUser}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.currentUser &&
                      Boolean(formik.errors.currentUser)
                    }
                    helperText={
                      formik.touched.currentUser && formik.errors.currentUser
                    }
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    required
                    id="previousUser"
                    name="previousUser"
                    label="Usuário Anterior"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.previousUser}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.previousUser &&
                      Boolean(formik.errors.previousUser)
                    }
                    helperText={
                      formik.touched.previousUser &&
                      Boolean(formik.errors.previousUser)
                    }
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    select
                    id="department"
                    name="department"
                    label="Departamento"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.department}
                    onChange={formik.handleChange}
                  >
                    {department.map((dp: any) => (
                      <MenuItem key={dp.value} value={dp.value}>
                        {dp.label}
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
                    error={
                      formik.touched.situation &&
                      Boolean(formik.errors.situation)
                    }
                    helperText={
                      formik.touched.situation && formik.errors.situation
                    }
                  />
                </FormControl>
              </ColumnSecond>

              <ColumnThird>
                <FormControl>
                  <TextField
                    required
                    id="buyDate"
                    name="buyDate"
                    type="date"
                    label="Data da Compra"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.buyDate}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.buyDate && Boolean(formik.errors.buyDate)
                    }
                    helperText={formik.touched.buyDate && formik.errors.buyDate}
                  />
                </FormControl>

                <FormControl>
                  <TextField
                    inputProps={{ accept: "file/*" }}
                    id="invoice"
                    name="invoice"
                    type="file"
                    onChange={(event: any) => {
                      uploadFileInvoice(event);
                    }}
                    error={
                      formik.touched.invoice && Boolean(formik.errors.invoice)
                    }
                    helperText={
                      formik.touched.invoice && Boolean(formik.errors.invoice)
                    }
                  />
                </FormControl>

                <FormControl>
                  <TextField
                    inputProps={{ accept: "file/*" }}
                    id="term"
                    name="term"
                    type="file"
                    onChange={(event: any) => {
                      uploadFileTerm(event);
                    }}
                    error={formik.touched.term && Boolean(formik.errors.term)}
                    helperText={
                      formik.touched.term && Boolean(formik.errors.term)
                    }
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    required
                    id="deliveryDate"
                    name="deliveryDate"
                    label="Data de Entrega"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.deliveryDate}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.deliveryDate &&
                      Boolean(formik.errors.deliveryDate)
                    }
                    helperText={
                      formik.touched.deliveryDate && formik.errors.deliveryDate
                    }
                  />
                </FormControl>
              </ColumnThird>
            </SubForm>
            <TextareaAutosize
              id="description"
              name="description"
              placeholder="Obs/Detalhes"
              minRows={8}
              style={{ width: "770px" }}
              value={formik.values.description}
              onChange={formik.handleChange}
              required
            />
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
    </Content>
  );
};

export default Hardwares;
