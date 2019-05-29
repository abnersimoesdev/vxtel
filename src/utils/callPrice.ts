import {prices} from '../constants/prices'

const getMinutePrice = (from: string, to: string): number => {
  const ddds: string = `${from}-${to}`

  return prices[ddds] || 0
}

const getCallPrice = (from: string, to: string, time: number): number => {
  const priceOfCall = getMinutePrice(from, to)

  return priceOfCall * time || 0
}

export {getCallPrice, getMinutePrice}
