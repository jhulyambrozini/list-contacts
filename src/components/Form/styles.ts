import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 56px;
  font-size: 24px;

  @media (max-width: 769px) {
    font-size: 20px;
  }

  @media (max-width: 426px) {
    flex-wrap: wrap;
    margin-bottom: 22px;
    font-size: 18px;
  }

`
export const Field = styled.input`
  background-color: #f1f1f1;
  border: none;
  border-bottom: 1px solid #000;
  padding: 8px;
  margin: 0 8px;
  border-radius: 5px;

  @media (max-width: 426px) {
    width: 90%;
    margin: 8px 0;
  }

`
export const Button = styled.button`
  background-color: rgb(79, 67, 215);
  color: #e7e7e7;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px;

  @media (max-width: 426px) {
    width: 90%;
    margin: 8px 0;
  }
`
