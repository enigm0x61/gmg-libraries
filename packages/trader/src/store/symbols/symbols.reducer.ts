import {SYMBOLS_SET_LIST} from './symbols.constant';

const initialState = {
  list: {},
};

export function symbolsReducer(state = initialState, action: any) {
  switch (action.type) {
    case SYMBOLS_SET_LIST: {
      const {list} = action.payload;
      return {
        ...state,
        list,
      };
    }
    default:
      return state;
  }
}
