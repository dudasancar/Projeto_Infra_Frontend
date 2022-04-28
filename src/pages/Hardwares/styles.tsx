import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const SubContent = styled.div`
    display: grid;
    width: 650px;
    height: 500px;
    border-radius: 5px;
    border: 1px solid #0dcd9a;
    margin-top: 25px;
    padding: 15px;
    h1 {
      font-size: 24px;
      font-weight: bold;
      color: #9ba3a9;
      height:0;

    }
  }
`;

export const ContentForm = styled.section`
  padding: 35px;
  form {
    display: grid;
    margin-top: 20px;
  }
`;

export const SubForm = styled.div`
  display: flex;
  width: 600px;
  height: 270px;
`;

export const ColumnOne = styled.div`
  display: grid;
  height: 0px;
  gap: 20px;
  div.MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    width: 250px;
    height: 40px;
  }
`;

export const ColumnSecond = styled.div`
  display: grid;
  margin-left: 10px;
  height: 0px;
  gap: 20px;
  div.MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    width: 250px;
    height: 40px;
  }
`;

export const ColumnThird = styled.div`
  display: grid;
  margin-left: 10px;
  height: 0px;
  gap: 20px;
  div.MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    width: 250px;
    height: 40px;
  }
`;

export const BtnContent = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
  width: 500px;
  gap: 20px;

  button.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButtonBase-root.btn-cancel.css-1e6y48t-MuiButtonBase-root-MuiButton-root {
    border: solid thin #ff5f5d;
    color: #ff5f5d;
  }

  button.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButtonBase-root.btn-salvar.css-1e6y48t-MuiButtonBase-root-MuiButton-root {
    border: solid thin #0dcd9a;
    color: white;
    background: #0dcd9a;
  }
`;
