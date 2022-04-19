import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
`;

export const ContainerMenu = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  flex-flow: row wrap;
  padding: 10px 5%;
  color: #3e4756;
  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 1.5rem;
    flex-flow: row wrap;

    p {
      font-size: 1.2rem;
      display: flex;
      gap: 5px;
      align-items: center;
      cursor: pointer;
    }

    @media (max-width: 340px) {
      justify-content: center;
    }
  }

  @media (max-width: 650px) {
    justify-content: center;
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
