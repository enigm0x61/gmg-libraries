import React, {FunctionComponent, memo, useState} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {storeReducer} from './store.reducer';

export const store = createStore(storeReducer);

const StoreComponent: FunctionComponent = ({children}) => {

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export const Store = memo(StoreComponent)
