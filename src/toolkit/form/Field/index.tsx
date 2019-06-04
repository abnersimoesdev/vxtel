import React from 'react'
import {FieldStyled, LabelStyled} from './styles'

type FieldType = {
  children: JSX.Element
  label: string
}

const Field = ({children, label}: FieldType) => {
  return (
    <FieldStyled>
      <label>
        <LabelStyled>{label}</LabelStyled>
        {children}
      </label>
    </FieldStyled>
  )
}
export default Field
