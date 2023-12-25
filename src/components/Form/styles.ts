import styled from 'styled-components'

export const FormContainer = styled.form`
  margin: 0 6rem;
  padding-top: 4rem;

  @media screen and (max-width: 426px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-content: center;
  }
`

export const FormInputsControls = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;

  > div {
    width: 300px;
  }

  @media screen and (max-width: 426px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 0;
  }
`
export const FormButtonsControls = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 426px) {
    align-items: center;
    width: 100%;
  }
`
