import {plans} from '../constants/plans'
import {getMinutePrice} from './callPrice'

const getMinutesOfPlan = (plan: string): number => {
  return plans[plan] || 0
}

const getPriceOfRate = (minutePrice: number, rate: number = 10): number => {
  return (minutePrice * rate) / 100
}

const checkIfExceeded = (time: number, minutesOfPlan: number): boolean => {
  return time > minutesOfPlan
}
const getPriceWithPlan = (plan: string, from: string, to: string, time: number): number => {
  const minutePrice = getMinutePrice(from, to)
  const minutesOfPlan = getMinutesOfPlan(plan)

  if (checkIfExceeded(time, minutesOfPlan)) {
    const priceOfRate = getPriceOfRate(minutePrice)
    const timeOut = time - minutesOfPlan

    return (minutePrice + priceOfRate) * timeOut
  }

  return 0
}

export {getMinutesOfPlan, getPriceOfRate, checkIfExceeded, getPriceWithPlan}
