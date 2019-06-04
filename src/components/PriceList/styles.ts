import styled from 'styled-components'
import {mobileLandscape} from '../../theme/breakpoints'

export const ColumnKindStyled = styled.aside`
  border: 1px solid ${props => props.theme.primary};
  text-align: center;

  h3,
  span {
    height: 3rem;
    line-height: 3rem;
  }

  h3 {
    font-size: 1.3rem;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.light};
    text-transform: uppercase;
  }

  span {
    font-size: 1.5rem;
    background-color: white;
  }
`

export const ListStyled = styled.aside`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 2rem 0;

  ${mobileLandscape(`
    flex-direction: row;

    ${ColumnKindStyled} {
      flex: 1 1 50%;
    }
  `)}
`
