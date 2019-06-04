import styled from 'styled-components'
import {MediaQuery, getBreakpoint} from '../../theme/breakpoints'

export const HomeStyled = styled.section`
  width: 100%;
  max-width: ${getBreakpoint(MediaQuery.sm)};
  margin: 0 auto;
  padding: 2rem;
`
