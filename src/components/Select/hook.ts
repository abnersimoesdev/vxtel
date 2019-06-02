import React, {useState} from 'react'
import {useDispatch} from 'redux-react-hook'

type SelectEvent = React.ChangeEvent<HTMLSelectElement>

export const useSelect = (initialValue: string, onChangeValue: Function) => {
  const [value, setValue] = useState(initialValue)

  const dispatch = useDispatch()
  const onChange = React.useCallback((newValue: string) => dispatch(onChangeValue(newValue)), [
    dispatch,
    onChangeValue
  ])

  return {
    value,
    setValue,
    reset: () => setValue(initialValue),
    bind: {
      value,
      onChange: (event: SelectEvent) => {
        const newValue = event.target.value
        setValue(newValue)
        onChange(newValue)
      }
    }
  }
}
