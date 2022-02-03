export interface ISymbolTick {
  Ask: number;
  Bid: number;
  ContractSize: number;
  Ctm: number;
  Currency: string;
  MarginDivider: number;
  MarginHedged: number;
  MarginInitial: number;
  MarginMaintenance: number;
  MarginMode: string;
  Point: number;
  ProfitMode: string;
  Symbol: string;
  TickSize: number;
  TickValue: number;
  Type: number;
}

export interface ISymbolTickReport {
  CloseShiftOpen: number,
  HighShiftOpen: number,
  LowShiftOpen: number,
  OpenPrice: number,
  RateTime: number,
  Volume: number,
}

export interface ISymbolReport {
  Symbols: string,
  Ticks: ISymbolTickReport[],
}

export interface ISymbolsResponse {
  Symbols: {
    [name: string]: [ISymbolTick, ISymbolTick];
  };
}

export type ISymbolsReportResponse = ISymbolReport[];


enum AllowedMethods {
  'post', 'POST', 'get', 'GET', 'put', 'PUT'
}

export type Body =
  string
  | Blob
  | ArrayBufferView
  | ArrayBuffer
  | FormData
  | URLSearchParams
  | ReadableStream<Uint8Array>
  | null
  | undefined;
export type Method = keyof typeof AllowedMethods;
export type _Headers = Headers | string[][] | Record<string, string> | undefined
interface Props {
  url: string;
  method?: Method;
  headers: _Headers,
  body?: Body
}