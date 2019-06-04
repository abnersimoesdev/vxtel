import React from 'react'
import {useField} from '../Field/hook'

export interface OptionType {
  text: string
  value: string
}

interface OptionListType {
  defaultValue?: string
  options: Array<OptionType>
  onChangeValue: Function
}

const Select = ({defaultValue, options, onChangeValue}: OptionListType) => {
  const {bind} = useField(defaultValue || options[0].value, onChangeValue)

  return (
    <select {...bind}>
      {options.map((option: OptionType, index: number) => (
        <option key={index} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  )
}
export default Select
