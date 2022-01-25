import {REPORT_SET_LIST} from './report.constant';

const initialState = {
  list: {},
};

export function reportReducer(state = initialState, action: any) {
  switch (action.type) {
    case REPORT_SET_LIST: {
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
