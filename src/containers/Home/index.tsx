import React from 'react'
import {useMappedState} from 'redux-react-hook'
import {AppStateType} from '../../store/reducers/types'
import Filter from '../../components/Filter'
import {parseSelect} from '../../components/Filter/helper'

const Home = () => {
  const mapState = React.useCallback(
    (state: AppStateType) => ({
      from: parseSelect(state.locales),
      to: parseSelect(state.locales),
      time: state.filter.time,
      plans: parseSelect(state.plans),
      standardPrice: state.standardPrice,
      plansPrice: state.plansPrice
    }),
    []
  )
  const {from, to, time, plans, standardPrice, plansPrice} = useMappedState(mapState)

  return (
    <div>
      <Filter from={from} to={to} time={time} plans={plans} />

      <ul>
        {standardPrice.map((price: string, index: number) => (
          <li key={index}>{price}</li>
        ))}
      </ul>

      <ul>
        {plansPrice.map((price: string, index: number) => (
          <li key={index}>{price}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
