import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.div`
  width: 34%;
  max-width: 800px;
  background-color: white;
  box-sizing: border-box;
  padding: 3rem;
  box-shadow: 0px 0px 10px #00000029;
  color: #3e4756;
  display: flex;
  flex-flow: column nowrap;
  gap: 1.2rem;
  @media (max-width: 1200px) {
    width: 420px;
  }

  @media (max-width: 450px) {
    width: 90%;
  }

  h1 {
    padding: 0;
    margin: 0;
  }

  form {
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;

 
  }
`;
