import React from 'react'
import {FieldStyled} from './styles'

type FieldType = {
  children: JSX.Element
  label: string
}

const Field = ({children, label}: FieldType) => {
  return (
    <FieldStyled>
      <label>
        <span>{label}</span>
        {children}
      </label>
    </FieldStyled>
  )
}
export default Field
