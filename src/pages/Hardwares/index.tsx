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
} from "@mui/material";
import { useFormik } from "formik";

const Hardwares = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     equipament: "",
  //     serieNumber: "",
  //     details: "",
  //     contractTerm: "",
  //   },
  // });

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
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    id="name"
                    name="name"
                    label="Nome do Equipamento"
                    variant="outlined"
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    id="equipamentModel"
                    name="equipamentModel"
                    label="Modelo do Equipamento"
                    variant="outlined"
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    id="serieNumber"
                    name="serieNumber"
                    label="N° de serie"
                    variant="outlined"
                  />
                </FormControl>
              </ColumnOne>

              <ColumnSecond>
                <FormControl>
                  <TextField
                    id="currentUser"
                    name="currentUser"
                    label="Usuário Atual"
                    variant="outlined"
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    id="previousUser"
                    name="previousUser"
                    label="Usuário Anterior"
                    variant="outlined"
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    select
                    id="department"
                    name="department"
                    label="Departamento"
                    variant="outlined"
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    id="situation"
                    name="situation"
                    label="Situação"
                    variant="outlined"
                  />
                </FormControl>
              </ColumnSecond>

              <ColumnThird>
                <FormControl>
                  <TextField
                    id="buyDate"
                    name="buyDate"
                    label="Data da Compra"
                    variant="outlined"
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    id="invpice"
                    name="invoice"
                    label="Nota Fiscal"
                    variant="outlined"
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    id="term"
                    name="term"
                    label="Termo de Responsabilidade"
                    variant="outlined"
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    id="deliveryDate"
                    name="deliveryDate"
                    label="Data de Entrega"
                    variant="outlined"
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
