import styled from "styled-components";

export const ContainerPage = styled.div`
  box-sizing: border-box;
  max-width: 100vw;
 
`;

export const ContainerMenu = styled.header`
box-sizing: border-box;
width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  flex-flow: row wrap;
  padding: 10px 10%;
  color: #3e4756;
  padding: 10px 10%;
  border-bottom: solid 2px #e6e6e6;
  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 2.2rem;
    flex-flow: row wrap;

    div {
      display: flex;
      gap: 1rem;
      flex-flow: row wrap;
    }

    a {
      display: flex;
      gap: 8px;
      align-items: center;
      cursor: pointer;
    }
  }
  @media (max-width: 940px) {
    justify-content: center;
    nav {
      justify-content: center;
    }
    div {
      justify-content: center;
    }
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
