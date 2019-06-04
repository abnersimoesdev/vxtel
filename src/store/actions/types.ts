import {Action} from 'redux'
import {
  CHANGE_FILTER_FROM,
  CHANGE_FILTER_TIME,
  CHANGE_FILTER_TO,
  CHANGE_FILTER_PLAN
} from './constants'

export interface changeFilterFromType extends Action {
  type: typeof CHANGE_FILTER_FROM
  payload: string
}

export interface changeFilterToType extends Action {
  type: typeof CHANGE_FILTER_TO
  payload: string
}

export interface changeFilterTimeType extends Action {
  type: typeof CHANGE_FILTER_TIME
  payload: string
}

export interface changeFilterPlanType extends Action {
  type: typeof CHANGE_FILTER_PLAN
  payload: string
}

export type AppActionType =
  | changeFilterFromType
  | changeFilterToType
  | changeFilterTimeType
  | changeFilterPlanType
