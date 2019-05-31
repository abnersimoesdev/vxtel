import React from 'react'
import {useSelect} from './hook'
import {SelectStyled} from './styles'

interface OptionType {
  text: string
  value: string
}

interface OptionListType {
  options: Array<OptionType>
}

const Select = ({options}: OptionListType) => {
  const {bind} = useSelect('')

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
