import { display } from "@mui/system";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  margin: 40px auto;
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;

  button {
    align-self: start;
  }
`;
