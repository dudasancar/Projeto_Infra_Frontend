import React from "react";
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

const Hardwares = () => {
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
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Content>
      <SubContent>
        <h1>Cadastro de Equipamentos:</h1>
        <ContentForm>
          <form>
            <SubForm>
              <ColumnOne>
                <FormControl>
                  <TextField
                    select
                    id="equipamentType"
                    name="equipamentType"
                    label="Tipo de Equipamento"
                    variant="outlined"
                    required
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
                    error={formik.touched.currentUser}
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
                    id="invoice"
                    name="invoice"
                    label="Nota Fiscal"
                    type="file"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.invoice}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.invoice && Boolean(formik.errors.invoice)
                    }
                    helperText={formik.touched.invoice && formik.errors.invoice}
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    id="term"
                    name="term"
                    label="Termo de Responsabilidade"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.term}
                    onChange={formik.handleChange}
                    error={formik.touched.term && Boolean(formik.errors.term)}
                    helperText={formik.touched.term && formik.errors.term}
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
              id="obsDetails"
              name="obsDetails"
              placeholder="Obs/Detalhes"
              minRows={8}
              style={{ width: "770px" }}
              value={formik.values.deliveryDate}
              onChange={formik.handleChange}
              required
            />
            <BtnContent>
              <Button className="btn-cancel" type="reset">
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
