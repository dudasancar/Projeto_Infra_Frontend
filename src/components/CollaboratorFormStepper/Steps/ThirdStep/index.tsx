import React from "react";
import { TextField } from "@mui/material";
import { FormikProps } from "formik";
import { ICollaborator } from "../../interfaces"
import { GridForm } from "../../Styles";

interface IProps{
    formik: FormikProps<ICollaborator>
}
export default function ThirdStep({formik}: IProps) {

  return (
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
        name="city"
        id="city"
        label="Cidade"
        onChange={formik.handleChange}
        value={formik.values.city}
        error={formik.touched.city && Boolean(formik.errors.city)}
        helperText={formik.touched.city && formik.errors.city}
      />
      <TextField
        variant="outlined"
        type="text"
        name="contract"
        id="contract"
        label="Cidade"
        onChange={formik.handleChange}
        value={formik.values.contract}
        error={formik.touched.contract && Boolean(formik.errors.contract)}
        helperText={formik.touched.contract && formik.errors.contract}
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
    </GridForm>
  );
}
