import React from 'react'
import {SelectStyled} from './styles'
import {useField} from '../Field/hook'

export interface OptionType {
  text: string
  value: string
}

interface OptionListType {
  onChangeValue: Function
  options: Array<OptionType>
}

const Select = ({onChangeValue, options}: OptionListType) => {
  const {bind} = useField(options[0].value, onChangeValue)

  return (
    <SelectStyled {...bind}>
      {options.map((option: OptionType, index: number) => (
        <option key={index} value={option.value}>
          {option.text}
        </option>
      ))}
    </SelectStyled>
  )
}
export default Select
