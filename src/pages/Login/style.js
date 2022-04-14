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
  min-width: 340px;
  max-width: 600px;
  height: 70%;
  max-height: 800px;
  background-color: white;
  box-sizing: border-box;
  padding: 3rem;
  box-shadow: 0px 0px 10px #00000029;

  form {
    margin: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 25px;
    max-width: 420px;
    
    img {
      align-self: center;
      width: 160px;
      margin-bottom: 10%;
    }

    button {
      height: 40px;
      width: 100%;
    }

    div {
      width: 100%;
    }

    a{
        align-self: end;
        color: #1976D2;
    }
  }
`;
