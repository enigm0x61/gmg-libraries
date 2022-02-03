import {FETCH_ERROR, FETCH_SUCCESS, UPDATE_ERROR, UPDATE_ITEMS} from './types'
import Quote from "../classes/Quote";

export const initialState = {
  ready: false,
  error: false,
  data: {},
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESS: {
      const data = {}
      const report = {
        month: {},
        day: {},
      }

      action.payload.report[0].forEach(day => {
        if (day.hasOwnProperty('Symbol')) {
          report.day[day.Symbol] = day
        }
      })

      action.payload.report[1].forEach(month => {
        if (month.hasOwnProperty('Symbol')) {
          report.month[month.Symbol] = month
        }
      })

      for (let symbol in action.payload.symbols) {
        if (action.payload.symbols.hasOwnProperty(symbol)) {
          const instance = new Quote(action.payload.symbols[symbol])

          if (report.day.hasOwnProperty(symbol)) {
            instance.setReport('day', report.day[symbol].Ticks)
          }

          if (report.month.hasOwnProperty(symbol)) {
            instance.setReport('month', report.month[symbol].Ticks)
          }

          data[symbol] = instance
        }
      }

      return {
        ...state,
        ready: true,
        data,
      }
    }

    case FETCH_ERROR: {
      return {
        ...state,
        ready: true,
        error: true,
      }
    }

    case UPDATE_ITEMS: {
      const data = {}

      for (let symbol in action.payload.data) {
        if (action.payload.data.hasOwnProperty(symbol)) {
          data[symbol] = state.data[symbol].update(action.payload.data[symbol])
        }
      }

      return {
        ...state,
        data: {
          ...state.data,
          ...data,
        }
      }
    }

    case UPDATE_ERROR: {
      return {
        ...state,
        error: true,
      }
    }

    default: {
      return state
    }
  }
}

export default reducer
