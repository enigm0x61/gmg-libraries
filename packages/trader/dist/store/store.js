import React, { memo } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { storeReducer } from './store.reducer';
export const store = createStore(storeReducer);
const StoreComponent = ({ children }) => {
    return (React.createElement(Provider, { store: store }, children));
};
export const Store = memo(StoreComponent);
