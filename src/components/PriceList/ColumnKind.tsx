import React from 'react'
import {ColumnKindStyled} from './styles'

interface ColumnKindProps {
  title: string
  value: string
}

const ColumnKind = ({title, value}: ColumnKindProps) => (
  <ColumnKindStyled>
    <h3>{title}</h3>
    <span>{value}</span>
  </ColumnKindStyled>
)

export default ColumnKind
