import React from 'react'
import {useField} from '../Field/hook'

interface InputText {
  defaultValue?: string
  type?: string
  onChangeValue: Function
}

const InputText = ({defaultValue = '', type = 'text', onChangeValue}: InputText) => {
  const {bind} = useField(defaultValue, onChangeValue)

  return <input type={type} {...bind} />
}

export default InputText
