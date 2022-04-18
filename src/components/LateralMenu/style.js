import styled from "styled-components";

export const ContainerMenu = styled.div`
  width: 100vw;
  background-color: rgba(242, 242, 242, 1);
  display: flex;
  flex-flow: row wrap;
  gap: 25px;
  padding: 10px 5%;
  justify-content: space-between;
  align-items: center;
  color: #3e4756;

  svg {
    font-size: 2.2rem;
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 2rem;

    p {
      font-size: 1.2rem;
      display: flex;
      gap: 10px;
      align-items: center;
      cursor: pointer;
    }
  }
`;

export const UserDiv = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.2rem;
`;

export const ContainerModal = styled.div`
  position: absolute;
  background-color: rgba(242, 242, 242, 1);
  display: flex;
  flex-flow: column nowrap;
  left: ${props => props.left};
  top: 10%;

  gap: 5px;

  p {
    cursor: pointer;
    margin: 0;
    padding: 10px;
    :hover {
      background-color: rgba(215, 215, 215, 0.4);
    }
  }
`;
