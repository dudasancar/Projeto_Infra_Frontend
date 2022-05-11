import React from "react";
import { ContainerForm } from "./styles";

interface Props {
  email: string | undefined;
}

const EmailSent = (props: Props) => {
  return (
    <ContainerForm>
      <p>
        Foi enviado um e-mail para o endereço de e-mail {props.email} com o link
        para redefinição da senha
      </p>
    </ContainerForm>
  );
};

export default EmailSent;
