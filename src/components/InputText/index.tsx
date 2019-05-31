import React from 'react'
import {useInput} from './hook'
import {InputStyled} from './styles'

interface InputText {
  name: string
  type?: string
}

const InputText = ({name, type = 'text'}: InputText) => {
  const {bind} = useInput('')

  return <InputStyled name={name} type={type} {...bind} />
}

export default InputText
