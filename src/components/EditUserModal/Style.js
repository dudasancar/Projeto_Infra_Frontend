import styled from 'styled-components';

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
`

export const ModalForm = styled.div`
    height: 60%;
    width: 50%;
    box-sizing: border-box;
    padding: 25px;
    background-color: white;
    border: solid thin #E6E6E6;
    border-radius: 5px;
    display: flex;
    flex-flow: column nowrap;
    gap: 15px;

    h2{
      font-size: 2rem;
    }

    form{

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
    }
  `