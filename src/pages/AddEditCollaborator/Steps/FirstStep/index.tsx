import React from "react";
import { MenuItem, TextField } from "@mui/material";
import { FormikProps } from "formik";
import { ICollaborator } from "../../interfaces";
import { GridForm } from "../../Styles";

interface IProps {
  formik: FormikProps<ICollaborator>;
}

const sons = [
  {
    value: "não",
    label: "Não",
  },
  {
    value: "1 ou mais",
    label: "1 ou Mais",
  },
  {
    value: "3 ou mais",
    label: "3 ou Mais",
  },
  {
    value: "5 ou mais",
    label: "5 ou Mais",
  },
];


export default function FirstStep({ formik }: IProps) {

  return (
    <GridForm>
      <TextField
        variant="outlined"
        type="text"
        name="name"
        id="name"
        label="Nome Completo"
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
        name="contact"
        id="contact"
        label="Telefone para Contato"
        onChange={formik.handleChange}
        value={formik.values.contact}
        error={formik.touched.contact && Boolean(formik.errors.contact)}
        helperText={formik.touched.contact && formik.errors.contact}
      />
      <TextField
        variant="outlined"
        type="date"
        name="birth"
        id="birth"
        label="Data de Nascimento"
        InputLabelProps={{ shrink: true }}
        onChange={formik.handleChange}
        value={formik.values.birth?.split('T')[0]}
        error={formik.touched.birth && Boolean(formik.errors.birth)}
        helperText={formik.touched.birth && formik.errors.birth}
      />
      <TextField
        variant="outlined"
        type="text"
        name="CPF"
        id="CPF"
        label="CPF"
        onChange={formik.handleChange}
        value={formik.values.CPF}
        error={formik.touched.CPF && Boolean(formik.errors.CPF)}
        helperText={formik.touched.CPF && formik.errors.CPF}
      />
      <TextField
        variant="outlined"
        type="text"
        name="identity"
        id="identity"
        label="RG"
        onChange={formik.handleChange}
        value={formik.values.identity}
        error={formik.touched.identity && Boolean(formik.errors.identity)}
        helperText={formik.touched.identity && formik.errors.identity}
      />
      <TextField
        variant="outlined"
        type="text"
        name="mother"
        id="mother"
        label="Nome da Mãe"
        onChange={formik.handleChange}
        value={formik.values.mother}
        error={formik.touched.mother && Boolean(formik.errors.mother)}
        helperText={formik.touched.mother && formik.errors.mother}
      />
      <TextField
        variant="outlined"
        select
        name="sons"
        id="sons"
        label="Possui Filhos?"
        onChange={formik.handleChange}
        value={formik.values.sons}
        error={formik.touched.sons && Boolean(formik.errors.sons)}
        helperText={formik.touched.sons && formik.errors.sons}
        >
        {sons.map((son) => (
          <MenuItem key={son.value} value={son.value}>
            {son.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        variant="outlined"
        type="text"
        name="emergency_contact"
        id="emergency_contact"
        label="Contato de Emergencia"
        onChange={formik.handleChange}
        value={formik.values.emergency_contact}
        error={
          formik.touched.emergency_contact &&
          Boolean(formik.errors.emergency_contact)
        }
        helperText={
          formik.touched.emergency_contact && formik.errors.emergency_contact
        }
      />
      <TextField
        variant="outlined"
        type="text"
        name="responsible_emergency"
        id="responsible_emergency"
        label="Nome do Contato de Emergencia"
        onChange={formik.handleChange}
        value={formik.values.responsible_emergency}
        error={
          formik.touched.responsible_emergency &&
          Boolean(formik.errors.responsible_emergency)
        }
        helperText={
          formik.touched.responsible_emergency &&
          formik.errors.responsible_emergency
        }
      />
      <TextField
        variant="outlined"
        type="email"
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
        name="address"
        id="address"
        label="Endereço"
        onChange={formik.handleChange}
        value={formik.values.address}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
      />
    </GridForm>
  );
}
