import {combineReducers} from 'redux';
import {reportReducer} from './report/report.reducer';
import {symbolsReducer} from './symbols/symbols.reducer';

export const storeReducer = combineReducers({report: reportReducer, symbols: symbolsReducer});
