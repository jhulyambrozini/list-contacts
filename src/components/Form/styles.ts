import styled from 'styled-components'

export const FormContainer = styled.form`
  padding: 4rem 4rem 0 4rem;
  width: 100%;
`

export const FormInputsControls = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;

  > div {
    width: 300px;
  }

  @media screen and (max-width: 768px) {
    > div {
      width: 100%;
    }
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
`
