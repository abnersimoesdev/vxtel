import React from 'react'
import {useMappedState} from 'redux-react-hook'
import {AppStateType} from '../../store/reducers/types'
import {getCallPrice} from '../../utils/callPrice'
import {getPriceWithPlan} from '../../utils/planPrice'
import Filter from '../../components/Filter'
import {HomeStyled} from './styles'
import {convertRealCoin} from '../../utils/money'

const Home = () => {
  const mapState = React.useCallback(
    (state: AppStateType) => ({
      filter: state.filter
    }),
    []
  )
  const {filter} = useMappedState(mapState)
  const standardPrice = getCallPrice(filter.from, filter.to, parseInt(filter.time))
  const planPrice = getPriceWithPlan(filter.plan, filter.from, filter.to, parseInt(filter.time))

  return (
    <HomeStyled>
      <Filter from={filter.from} to={filter.to} time={filter.time} plan={filter.plan} />

      <span>{convertRealCoin(standardPrice)}</span>
      <span>{convertRealCoin(planPrice)}</span>
    </HomeStyled>
  )
}

export default Home
