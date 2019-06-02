import {AppActionType} from '../actions/types'
import {
  CHANGE_FILTER_TIME,
  CHANGE_FILTER_FROM,
  CHANGE_FILTER_TO,
  CHANGE_FILTER_PLAN
} from '../actions/constants'
import {AppStateType} from './types'

export const initialState: AppStateType = {
  standardPrice: [],
  plansPrice: [],
  locales: ['011', '016', '017', '018'],
  plans: ['FaleMais 30', 'FaleMais 60', 'FaleMais 120'],
  filter: {
    from: '',
    to: '',
    time: '',
    plan: ''
  }
}

const reducer = (state = initialState, action: AppActionType) => {
  switch (action.type) {
    case CHANGE_FILTER_FROM: {
      return {
        ...state,
        filter: {
          ...state.filter,
          from: action.payload
        }
      }
    }

    case CHANGE_FILTER_TO: {
      return {
        ...state,
        filter: {
          ...state.filter,
          to: action.payload
        }
      }
    }

    case CHANGE_FILTER_TIME: {
      return {
        ...state,
        filter: {
          ...state.filter,
          time: action.payload
        }
      }
    }

    case CHANGE_FILTER_PLAN: {
      return {
        ...state,
        filter: {
          ...state.filter,
          plan: action.payload
        }
      }
    }

    default:
      return state
  }
}

export default reducer
