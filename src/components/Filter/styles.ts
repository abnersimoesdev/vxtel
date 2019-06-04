import styled from 'styled-components'
import {FieldStyled} from '../../toolkit/form/Field/styles'
import {mobileLandscape} from '../../theme/breakpoints'

export const FilterStyled = styled.aside`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  ${mobileLandscape(`
    flex-direction: row;

    ${FieldStyled} {
      flex: 1 1 50%;
    }
  `)}
`
