import React from 'react'
import {useMappedState} from 'redux-react-hook'
import {AppStateType} from '../../store/reducers/types'
import {getCallPrice} from '../../utils/callPrice'
import {getPriceWithPlan} from '../../utils/planPrice'
import {planList} from '../../constants/plans'
import {locales} from '../../constants/prices'
import {parseSelect} from '../../toolkit/form/helpers'
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
      <Filter
        from={parseSelect(locales)}
        to={parseSelect(locales)}
        time={filter.time}
        plans={parseSelect(planList)}
      />

      <span>{convertRealCoin(standardPrice)}</span>
      <span>{convertRealCoin(planPrice)}</span>
    </HomeStyled>
  )
}

export default Home
