import React from "react";
import { MenuItem, TextField } from "@mui/material";
import { FormikProps } from "formik";
import { ICollaborator } from "../../interfaces";
import { GridForm } from "../../Styles";

interface IProps {
  formik: FormikProps<ICollaborator>;
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

export default function ThirdStep({ formik }: IProps) {
  return (
    <GridForm>
      <TextField
        variant="outlined"
        type="text"
        name="contract"
        id="contract"
        label="Tipo de Contrato"
        onChange={formik.handleChange}
        value={formik.values.contract}
        error={formik.touched.contract && Boolean(formik.errors.contract)}
        helperText={formik.touched.contract && formik.errors.contract}
      />
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
        type="date"
        name="start"
        id="start"
        label="Data de Inicio"
        InputLabelProps={{ shrink: true }}
        onChange={formik.handleChange}
        value={formik.values.start?.split("T")[0]}
        error={formik.touched.start && Boolean(formik.errors.start)}
        helperText={formik.touched.start && formik.errors.start}
      />
      <TextField
        variant="outlined"
        type="date"
        name="admission"
        id="admission"
        label="Data de Admissão"
        InputLabelProps={{ shrink: true }}
        onChange={formik.handleChange}
        value={formik.values.admission}
        error={formik.touched.admission && Boolean(formik.errors.admission)}
        helperText={formik.touched.admission && formik.errors.admission}
      />
      <TextField
        variant="outlined"
        type="text"
        name="computer"
        id="computer"
        label="Computador"
        onChange={formik.handleChange}
        value={formik.values.computer}
        error={formik.touched.computer && Boolean(formik.errors.computer)}
        helperText={formik.touched.computer && formik.errors.computer}
      />
      <TextField
        variant="outlined"
        type="number"
        name="payment"
        id="payment"
        label="Salário"
        onChange={formik.handleChange}
        value={formik.values.payment}
        error={formik.touched.payment && Boolean(formik.errors.payment)}
        helperText={formik.touched.payment && formik.errors.payment}
      />
      <TextField
        variant="outlined"
        type="number"
        name="cost_center"
        id="cost_center"
        label="Centro de Custo"
        onChange={formik.handleChange}
        value={formik.values.cost_center}
        error={formik.touched.cost_center && Boolean(formik.errors.cost_center)}
        helperText={formik.touched.cost_center && formik.errors.cost_center}
      />
      <TextField
        variant="outlined"
        type="time"
        name="hours"
        id="hours"
        label="Horas"
        InputLabelProps={{ shrink: true }}
        onChange={formik.handleChange}
        value={formik.values.hours}
        error={formik.touched.hours && Boolean(formik.errors.hours)}
        helperText={formik.touched.hours && formik.errors.hours}
      />
      <TextField
        variant="outlined"
        type="text"
        name="coordinator"
        id="coordinator"
        label="Coordenador"
        onChange={formik.handleChange}
        value={formik.values.coordinator}
        error={formik.touched.coordinator && Boolean(formik.errors.coordinator)}
        helperText={formik.touched.coordinator && formik.errors.coordinator}
      />
      <TextField
        variant="outlined"
        type="text"
        select
        name="status"
        id="status"
        label="Status"
        onChange={formik.handleChange}
        value={formik.values.status}
        error={formik.touched.status && Boolean(formik.errors.status)}
        helperText={formik.touched.status && formik.errors.status}
      >
        {status.map((stat) => (
          <MenuItem key={stat.value} value={stat.value}>
            {stat.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        variant="outlined"
        type="text"
        name="equipment_id"
        id="equipment_id"
        label="ID do Equipamento"
        onChange={formik.handleChange}
        value={formik.values.equipment_id}
        error={
          formik.touched.equipment_id && Boolean(formik.errors.equipment_id)
        }
        helperText={formik.touched.equipment_id && formik.errors.equipment_id}
      />
    </GridForm>
  );
}
