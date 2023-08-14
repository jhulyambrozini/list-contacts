import styled from 'styled-components'
import { Button } from '../../styles'

export const ContactStyle = styled.div`
  list-style: none;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px;

  @media (max-width: 769px) {
    flex-direction: column;
  }

`
export const InputList = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #67b588;
  padding-bottom: 8px;
  background-color: transparent;
  font-size: 16px;
`
export const ButtonDelCancel = styled(Button)`
  background-color: #CB2B2B;
`
export const ButtonEdit = styled(Button)`
  background-color: rgb(79, 67, 215);
`
export const ButtonSave = styled(Button)`
  background-color: #67b588;
`
export const Actions = styled.div`
  display: flex;
  gap: 16px;
`
