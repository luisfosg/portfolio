import styled from 'styled-components'
import { addOpacity } from 'theme/util'

export const ArticleContainer = styled.article`
  padding: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;

  background: ${({ theme }) => addOpacity(theme.colors.nord4, 0.2)};
  box-shadow: 0 8px 32px 0 ${({ theme }) => addOpacity(theme.colors.nord6, 0.37)};
  backdrop-filter: blur( 6.5px );
  -webkit-backdrop-filter: blur( 6.5px );
  border-radius: 10px;
  border: 1px solid ${({ theme }) => addOpacity(theme.colors.nord3, 0.2)};
`
