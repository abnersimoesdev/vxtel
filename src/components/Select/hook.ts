import React, {useState} from 'react'

type SelectEvent = React.ChangeEvent<HTMLSelectElement>

export const useSelect = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event: SelectEvent) => {
        setValue(event.target.value)
      }
    }
  }
}
