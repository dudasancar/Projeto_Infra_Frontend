import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalForm = styled.form`
  height: 60%;
  width: 50%;
  max-width: 1400px;
  box-sizing: border-box;
  padding: 25px;
  background-color: white;
  border: solid thin #e6e6e6;
  border-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  gap: 25px;

  h2 {
    font-size: 2rem;
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

  #SaveButton {
    background-color: #0dcd9a;
    color: white;
  }
`;
