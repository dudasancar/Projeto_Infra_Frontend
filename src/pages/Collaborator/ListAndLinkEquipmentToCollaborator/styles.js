import styled from "styled-components";

export const Container = styled.section`
  width: 80%;
  margin: 40px auto;
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
`;

export const AddEquipmentContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  border: solid thin #e6e6e6;
  padding: 2rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;

  h1 {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    color: #3e4756;
  }

  form {
    display: flex;

    gap: 1rem;

    div {
      width: 180px;
    }
  }
`;

export const ButtonDiv = styled.div`
display: flex;
gap: 25px`;

export const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "1px solid #e6e6e6",
  boxShadow: 24,
  p: 4,
};
