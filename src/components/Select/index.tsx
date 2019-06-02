import React from 'react'
import {useSelect} from './hook'
import {SelectStyled} from './styles'

interface OptionType {
  text: string
  value: string
}

interface OptionListType {
  onChangeValue: Function
  options: Array<OptionType>
}

const Select = ({onChangeValue, options}: OptionListType) => {
  const {bind} = useSelect(options[0].value, onChangeValue)

  return (
    <SelectStyled {...bind}>
      {options.map((option: OptionType, index: number) => 
        <option key={index} value={option.value}>
          {option.text}
        </option>
      )}
    </SelectStyled>
  )
}
export default Select
