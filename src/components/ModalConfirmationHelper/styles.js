import styled from "styled-components";

export const ContainerModal = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 0.8rem;
  justify-content: center;
  padding: 0 2rem 0 2rem;
  width: 100%;
  height: 100%;
  background-color: white;

  div {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  span {
    font-size: 1rem;
    color: black;
    text-align: center;
  }
  #CancelButton{
    border: solid thin #ff5f5d;
    color: #ff5f5d;
  }
`;
//