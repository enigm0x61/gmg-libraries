import { REPORT_SET_LIST } from './report.constant';
const initialState = {
    list: {},
};
export function reportReducer(state = initialState, action) {
    switch (action.type) {
        case REPORT_SET_LIST: {
            const { list } = action.payload;
            return Object.assign(Object.assign({}, state), { list });
        }
        default:
            return state;
    }
}
