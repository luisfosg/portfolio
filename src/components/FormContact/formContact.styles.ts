import styled from 'styled-components'
import { addOpacity } from './../../utils/index'

export const FormContactContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  background: ${({ theme }) => addOpacity(theme.colors.nord4, 0.2)};
  box-shadow: 2px 2px 10px ${({ theme }) => addOpacity(theme.colors.nord14, 0.1)};
  border-radius: 10px;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

type FormContactProps = {
  center?: boolean
}

export const FormContactTitle = styled.h2<FormContactProps>`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 2rem;
  padding: 0;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`