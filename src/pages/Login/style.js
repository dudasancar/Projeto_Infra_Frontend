import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerLoginForm = styled.div`
  width: 30%;
  max-width: 800px;
  background-color: white;
  box-sizing: border-box;
  padding: 3rem;
  box-shadow: 0px 0px 10px #00000029;

  @media (max-width: 1150px) {
    width: 400px;
  }

  @media (max-width: 450px) {
    width: 90%;
  }
  
  form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 25px;

    img {
      align-self: center;
      width: 160px;
      margin-bottom: 10%;
    }

    a {
      align-self: end;
      color: #1976d2;
    }

    button {
      padding: 12px;
    }
  }
`;
