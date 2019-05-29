import {getCallPrice, getMinutePrice} from '../callPrice'

test('should return price of call', () => {
  expect(getMinutePrice('011', '016')).toEqual(1.9)
  expect(getMinutePrice('016', '011')).toEqual(2.9)
  expect(getMinutePrice('011', '017')).toEqual(1.7)
  expect(getMinutePrice('017', '011')).toEqual(2.7)
  expect(getMinutePrice('011', '018')).toEqual(0.9)
  expect(getMinutePrice('018', '011')).toEqual(1.9)
  expect(getMinutePrice('foo', 'bar')).toEqual(0)
})

test('should return price of normal rate by on minute', () => {
  const minute = 10

  expect(getCallPrice('011', '016', minute)).toEqual(19)
  expect(getCallPrice('016', '011', minute)).toEqual(29)
  expect(getCallPrice('011', '017', minute)).toEqual(17)
  expect(getCallPrice('017', '011', minute)).toEqual(27)
  expect(getCallPrice('011', '018', minute)).toEqual(9)
  expect(getCallPrice('018', '011', minute)).toEqual(19)
  expect(getCallPrice('foo', 'bar', minute)).toEqual(0)
})

test('should return price without plan', () => {
  expect(getCallPrice('011', '016', 20)).toEqual(38)
  expect(getCallPrice('011', '017', 80)).toEqual(136)
  expect(getCallPrice('018', '011', 200)).toEqual(380)
})
