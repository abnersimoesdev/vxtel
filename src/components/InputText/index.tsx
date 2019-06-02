import React from 'react'
import {useInput} from './hook'
import {InputStyled} from './styles'

interface InputText {
  defaultValue?: string
  type?: string
  onChangeValue: Function
}

const InputText = ({defaultValue = '', type = 'text', onChangeValue}: InputText) => {
  const {bind} = useInput(defaultValue, onChangeValue)

  return <InputStyled type={type} {...bind} />
}

export default InputText
