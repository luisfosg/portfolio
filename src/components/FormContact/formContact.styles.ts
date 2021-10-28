import styled from 'styled-components'
import { addOpacity } from './../../utils/index'

export const FormContactContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  background: ${({ theme }) => addOpacity(theme.colors.nord10, 0.2)};
  box-shadow: 0 2px 12px 0 ${({ theme }) => addOpacity(theme.colors.nord12, 0.1)};
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

export const FormContactTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
`

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
