import React from "react";
import { TextField } from "@mui/material";
import { FormikProps } from "formik";
import { ICollaborator } from "../../interfaces"
import { GridForm } from "../../Styles";

interface IProps{
    formik: FormikProps<ICollaborator>
}
export default function SecondStep({formik}: IProps) {

  return (
    <GridForm>
      <TextField
        variant="outlined"
        type="text"
        name="occupation"
        id="occupation"
        label="Ocupação"
        onChange={formik.handleChange}
        value={formik.values.occupation}
        error={formik.touched.occupation && Boolean(formik.errors.occupation)}
        helperText={formik.touched.occupation && formik.errors.occupation}
      />
      <TextField
        variant="outlined"
        type="text"
        name="MEI"
        id="MEI"
        label="MEI"
        onChange={formik.handleChange}
        value={formik.values.MEI}
        error={formik.touched.MEI && Boolean(formik.errors.MEI)}
        helperText={formik.touched.MEI && formik.errors.MEI}
      />
      <TextField
        variant="outlined"
        type="text"
        name="schooling"
        id="schooling"
        label="Grau de Escolaridade"
        onChange={formik.handleChange}
        value={formik.values.schooling}
        error={formik.touched.schooling && Boolean(formik.errors.schooling)}
        helperText={formik.touched.schooling && formik.errors.schooling}
      />
    </GridForm>
  );
}
