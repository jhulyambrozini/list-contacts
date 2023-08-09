import styled from "styled-components";
import { Button } from "../../styles";

export const FormStyle = styled.form`
  display: grid;
  justify-content: center;
  margin-bottom: 30px;
  gap: 8px;
`
export const Field = styled.input`
  background-color: #f1f1f1;
  border: none;
  border-bottom: 1px solid #000;
  padding: 8px;
  border-radius: 8px;
  font-size: 14px;

  @media (max-width: 426px) {
    margin: 8px 0;
  }
`
export const FormGroup = styled.div`
  display: grid;
  font-size: 16px;
  width: 400px;

  label {
    margin-bottom: 8px;
  }
`
export const ButtonCreate = styled(Button)`
  background-color: rgb(79, 67, 215);
  margin-top: 16px;

  @media (max-width: 426px) {
    margin: 8px 0;
  }
`
