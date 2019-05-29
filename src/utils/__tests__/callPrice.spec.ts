import {getPriceOfCall} from '../callPrice'

test('should return price of normal rate by on minute', () => {
  const minute = 1

  expect(getPriceOfCall('011', '016', minute)).toEqual(1.9)
  expect(getPriceOfCall('016', '011', minute)).toEqual(2.9)
  expect(getPriceOfCall('011', '017', minute)).toEqual(1.7)
  expect(getPriceOfCall('017', '011', minute)).toEqual(2.7)
  expect(getPriceOfCall('011', '018', minute)).toEqual(0.9)
  expect(getPriceOfCall('018', '011', minute)).toEqual(1.9)
  expect(getPriceOfCall('foo', 'bar', minute)).toEqual(0)
})
