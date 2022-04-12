import styled from "styled-components";

export const Container = styled.section`
  box-sizing: border-box;
  background-color: #f7f7f7;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    box-shadow: 0px 0px 10px #00000029;
    height: 60%;
    width: 55%;
    max-width: 1400px;
    box-sizing: border-box;
    padding: 25px;
    background-color: white;
    border: solid thin #e6e6e6;
    border-radius: 5px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }
  h2 {
    font-size: 2rem;
    margin:0;
    padding:0;
    color: #3E4756;
  }
`;

export const GridForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-self: end;
  align-self: end;

  button {
    width: 100px;
    height: 40px;
  }
  #CancelButton {
    border: solid thin #ff5f5d;
    color: #ff5f5d;
  }
`;
