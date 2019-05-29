interface PricesProps {
  [key: string]: number
}

const getPriceOfCall = (from: string, to: string, time: number): number => {
  const ddds: string = `${from}-${to}`
  const prices: PricesProps = {
    '011-016': 1.9,
    '011-017': 1.7,
    '011-018': 0.9,
    '016-011': 2.9,
    '017-011': 2.7,
    '018-011': 1.9
  }
  return prices[ddds] * time || 0
}

export {getPriceOfCall}
