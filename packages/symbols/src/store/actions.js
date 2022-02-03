import {FETCH_ERROR, FETCH_SUCCESS, UPDATE_ERROR, UPDATE_ITEMS} from './types'
import {dispatch} from './index'

export const fetchSuccess = (symbols, report) => dispatch({
  type: FETCH_SUCCESS,
  payload: {
    symbols,
    report,
  },
})

export const fetchError = () => dispatch({
  type: FETCH_ERROR,
})

export const updateItems = (data) => dispatch({
  type: UPDATE_ITEMS,
  payload: {
    data,
  },
})

export const updateError = () => dispatch({
  type: UPDATE_ERROR,
})
