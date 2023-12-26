import styled from 'styled-components'
import { colors, typography } from '../../styles'

export const FormContainer = styled.form`
  padding: 6rem 4rem 0 4rem;
  width: 100%;
`

export const FormInputsControls = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-top: 11.6rem;

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

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
`

export const InputAddPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;
  width: 130px;
  height: 130px;
  border-radius: 50%;

  input {
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }

  img {
    position: absolute;
  }

  @media screen and (max-width: 426px) {
    height: 100px;
    width: 100px;
  }
`
export const FullName = styled.span`
  color: ${colors.primary09};
  text-align: center;

  font-family: ${typography.secondary};
  font-size: 24px;
  font-weight: 500;

  @media screen and (max-width: 426px) {
    span {
      font-size: 2rem;
    }
  }
`
