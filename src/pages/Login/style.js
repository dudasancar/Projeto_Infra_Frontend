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
  max-width: 1200px;
  height: 80%;
  background-color: white;
  box-sizing: border-box;
  padding: 50px;
  box-shadow: 0px 0px 10px #00000029;
  max-height: 700px;

  form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 25px;

    img {
      align-self: center;
      width: 180px;
      margin-bottom: 30px;
    }

    button {
      height: 40px;
      width: 100%;
      max-width: 450px;
    }

    div {
      width: 100%;
      max-width: 450px;
    }

    a{
        align-self: end;
        color: #1976D2;
    }
  }
`;
