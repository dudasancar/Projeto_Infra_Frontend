import styled from "styled-components";

export const ContainerMenu = styled.div`
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  padding: 10px 5%;
  justify-content: space-between;
  align-items: center;
  color: #3e4756;
  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 1.5rem;

    p {
      font-size: 1.2rem;
      display: flex;
      gap: 5px;
      align-items: center;
      cursor: pointer;
    }
  }
`;

export const DropDownDiv = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  p {
    gap: 5px;
    display: flex;
    align-items: center;
    padding-bottom: 3px;
  }
`;


