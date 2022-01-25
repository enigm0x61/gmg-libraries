import { SYMBOLS_SET_LIST } from './symbols.constant';
const initialState = {
    list: {},
};
export function symbolsReducer(state = initialState, action) {
    switch (action.type) {
        case SYMBOLS_SET_LIST: {
            const { list } = action.payload;
            return Object.assign(Object.assign({}, state), { list });
        }
        default:
            return state;
    }
}
