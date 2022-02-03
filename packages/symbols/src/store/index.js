import {BehaviorSubject} from 'rxjs'
import {scan, startWith, shareReplay} from 'rxjs/operators'
import reducer from './reducer'
import {__INIT__} from './types'

function createStore(rootReducer) {
  const subscription$ = new BehaviorSubject({type: __INIT__})

  const store$ = subscription$.pipe(
    scan(rootReducer, undefined),
  )

  store$.dispatch = action => subscription$.next(action)

  store$.subscription = subscription$

  return store$
}

export const store$ = createStore(reducer)

export const dispatch = store$.dispatch
