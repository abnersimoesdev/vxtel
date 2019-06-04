import {convertRealCoin} from '../money'

test('should return real coin formatted', () => {
  expect(convertRealCoin(0)).toEqual('R$ 0,00')
  expect(convertRealCoin(0.1)).toEqual('R$ 0,10')
  expect(convertRealCoin(0.01)).toEqual('R$ 0,01')
  expect(convertRealCoin(0.001)).toEqual('R$ 0,00')
})
