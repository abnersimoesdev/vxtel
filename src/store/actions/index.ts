import {
  changeFilterFromType,
  changeFilterTimeType,
  changeFilterToType,
  changeFilterPlanType
} from './types'
import {
  CHANGE_FILTER_TIME,
  CHANGE_FILTER_FROM,
  CHANGE_FILTER_TO,
  CHANGE_FILTER_PLAN
} from './constants'

export const changeFilterFrom = (payload: string): changeFilterFromType => ({
  type: CHANGE_FILTER_FROM as typeof CHANGE_FILTER_FROM,
  payload
})

export const changeFilterTo = (payload: string): changeFilterToType => ({
  type: CHANGE_FILTER_TO as typeof CHANGE_FILTER_TO,
  payload
})

export const changeFilterTime = (payload: string): changeFilterTimeType => ({
  type: CHANGE_FILTER_TIME as typeof CHANGE_FILTER_TIME,
  payload
})

export const changeFilterPlan = (payload: string): changeFilterPlanType => ({
  type: CHANGE_FILTER_PLAN as typeof CHANGE_FILTER_PLAN,
  payload
})
