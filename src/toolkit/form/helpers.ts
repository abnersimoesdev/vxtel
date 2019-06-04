const parseSelect = (options: string[]) =>
  options.map((value: string) => ({
    text: value,
    value
  }))

export {parseSelect}
