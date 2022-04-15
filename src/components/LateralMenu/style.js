import styled from 'styled-components'

export const ContainerMenu = styled.div`
  width: 100vw;
  background-color: grey;
  display: flex;
  flex-flow:  row nowrap;
  gap: 25px;
  padding: 1rem;

  svg {
    font-size: 2.5rem;

    :hover {
       color:white;
    }
  }
`;