import styled from 'styled-components'
import {mobileLandscape} from '../../theme/breakpoints'

export const HeadingStyled = styled.header`
  margin-bottom: 2rem;

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 200;
    text-transform: lowercase;
    opacity: 0.5;
  }

  ${mobileLandscape(`
    h2,
    h3 {
      display: inline-block;
    }

    h3 {
      margin-left: 1rem;
    }
  `)}
`
