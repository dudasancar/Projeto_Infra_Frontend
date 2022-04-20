import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #e6e6e6;
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
    font-size: 1.6rem;
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 1.5rem;
    flex-flow: row wrap;

    p {
      display: flex;
      gap: 8px;
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
  #personIcon {
    font-size: 2.5rem;
  
    
  }

  p {
    gap: 8px;
    display: flex;
    align-items: center;

  }
`;
