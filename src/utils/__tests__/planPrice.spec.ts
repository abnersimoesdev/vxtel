import {getMinutesOfPlan, getPriceOfRate, checkIfExceeded, getPriceWithPlan} from '../planPrice'
import {getMinutePrice} from '../callPrice'

test('should return minutes of plan', () => {
  expect(getMinutesOfPlan('FaleMais 30')).toEqual(30)
  expect(getMinutesOfPlan('FaleMais 60')).toEqual(60)
  expect(getMinutesOfPlan('FaleMais 120')).toEqual(120)
})

describe('should return price of rate', () => {
  const minutePrice = getMinutePrice('011', '016')

  it('should return price of rate default 10%', () => {
    expect(getPriceOfRate(minutePrice)).toEqual(0.19)
  })

  it('should return price of rate 20%', () => {
    expect(getPriceOfRate(minutePrice, 20)).toEqual(0.38)
    expect(getPriceOfRate(minutePrice, 100)).toEqual(minutePrice)
  })
})

test('should return a check boolean if time is exceeded', () => {
  const planOfThirty = getMinutesOfPlan('FaleMais 30')

  expect(checkIfExceeded(20, planOfThirty)).toEqual(false)
  expect(checkIfExceeded(30, planOfThirty)).toEqual(false)
  expect(checkIfExceeded(40, planOfThirty)).toEqual(true)
})

test('should return price by plan', () => {
  expect(getPriceWithPlan('FaleMais 30', '011', '016', 20)).toEqual(0)
  expect(getPriceWithPlan('FaleMais 60', '011', '017', 80)).toEqual(37.4)
  expect(getPriceWithPlan('FaleMais 120', '018', '011', 200)).toEqual(167.2)
})
