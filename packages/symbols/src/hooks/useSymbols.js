import React, {useState, useEffect} from 'react';
import {store$} from '../store';
import {initialState} from '../store/reducer';

const useSymbols = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const subscription = store$.subscribe(setState);

    return () => subscription.unsubscribe();
  }, [store$]);

  return state;
};

export default useSymbols;
