import React from 'react'
import {useMappedState} from 'redux-react-hook'
import Select from '../../components/Select'
import InputText from '../../components/InputText'
import {AppStateType} from '../../store/reducers/types'
import {
  changeFilterTime,
  changeFilterFrom,
  changeFilterTo,
  changeFilterPlan
} from '../../store/actions'

const Home = () => {
  const mapFilterState = React.useCallback((state: AppStateType) => state.filter, [])
  const mapLocalesState = React.useCallback((state: AppStateType) => state.locales, [])
  const mapPlansState = React.useCallback((state: AppStateType) => state.plans, [])

  const filter = useMappedState(mapFilterState)
  const locales = useMappedState(mapLocalesState)
  const plans = useMappedState(mapPlansState)

  const from = locales.map((locale: string) => ({
    text: locale,
    value: locale
  }))

  const to = locales.map((locale: string) => ({
    text: locale,
    value: locale
  }))

  const plan = plans.map((plan: string) => ({
    text: plan,
    value: plan
  }))

  return (
    <div>
      <Select onChangeValue={changeFilterFrom} options={from} />
      <Select onChangeValue={changeFilterTo} options={to} />
      <InputText defaultValue={filter.time} onChangeValue={changeFilterTime} />
      <Select onChangeValue={changeFilterPlan} options={plan} />
    </div>
  )
}

export default Home
