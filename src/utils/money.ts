const parseCent = (cent: string = '00') => (cent.length > 1 ? cent.slice(0, 2) : `${cent}0`)

const convertRealCoin = (number: number): string => {
  const money = number.toString()
  const units = money.split('.')
  const [real, cent] = units

  return `R$ ${real},${parseCent(cent)}`
}

export {convertRealCoin}
