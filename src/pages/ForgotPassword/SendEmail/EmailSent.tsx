import React from "react";
import { ContainerForm } from "./styles";

interface Props{
    email: string | undefined,
}

const EmailSent = (props: Props) => {
  return (
    <ContainerForm>
      <p>
        {" "}
        Foi enviado um e-mail para o endereço {props.email} com o token de
        acesso para recuperaçãoda conta
      </p>
    </ContainerForm>
  );
};

export default EmailSent;
