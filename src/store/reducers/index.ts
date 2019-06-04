import {AppActionType} from '../actions/types'
import {
  CHANGE_FILTER_TIME,
  CHANGE_FILTER_FROM,
  CHANGE_FILTER_TO,
  CHANGE_FILTER_PLAN
} from '../actions/constants'
import {AppStateType} from './types'

export const initialState: AppStateType = {
  filter: {
    from: '011',
    to: '016',
    time: '1',
    plan: 'FaleMais 30'
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
