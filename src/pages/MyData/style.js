import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 0px 10px #00000029;
  width: 40%;
  margin: 50px auto;
  min-width: 300px;
  max-width: 1200px;
  box-sizing: border-box;
  padding: 2rem;
  background-color: white;
  border: solid thin #e6e6e6;
  border-radius: 5px;
  @media (max-width: 800px) {
    width: 90%;
  }

    p {
      margin: 10px 0;
      padding: 0;
      color: #3e4756;
    }

`;
