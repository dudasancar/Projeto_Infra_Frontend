import styled from "styled-components";

export const Container = styled.section`
  box-sizing: border-box;
  background-color: #f7f7f7;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.div`
  box-shadow: 0px 0px 10px #00000029;
  width: 60%;
  min-width: 300px;
  max-width: 1200px;
  box-sizing: border-box;
  padding: 2rem;
  background-color: white;
  border: solid thin #e6e6e6;
  border-radius: 5px;
  @media (max-width: 800px) {
    width: 90%;
  }

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    gap: 3rem;
  }
  h2 {
    font-size: 2rem;
    margin: 0;
    padding: 0;
    color: #3e4756;
  }
`;

export const GridForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-self: end;
  align-self: end;

  #CancelButton {
    border: solid thin #ff5f5d;
    color: #ff5f5d;
  }
`;
