import styled from "styled-components";

export const ContainerMenu = styled.div`
  width: 100vw;
  background-color: grey;
  display: flex;
  flex-flow: row wrap;
  gap: 25px;
  padding: 10px 5%;
  justify-content: space-between;
  align-items: center;
  color: #3e4756;

  svg {
    font-size: 2.2rem;

    :hover {
      color: white;
    }
  }

  nav {
    display: flex;
    gap: 1rem;

    p {
      font-size: 1.2rem;
      display: flex;
      gap: 10px;
      align-items: center;

      :hover {
        color: white;
      }
    }
  }
`;

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.2rem;
`;

export const ContainerModalUser = styled.div`
  position: absolute;
  background-color: black;
  width: 100px;
  height: 100px;
  right: 5%;
  top: 10%;
`;
