import React, {useState} from 'react'

type InputEvent = React.ChangeEvent<HTMLInputElement>

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event: InputEvent) => {
        setValue(event.target.value)
      }
    }
  }
}
