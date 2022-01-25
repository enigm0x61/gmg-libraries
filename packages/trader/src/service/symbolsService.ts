import ApiQuotes from '../api/api';

export class SymbolsService {
  public api: ApiQuotes | undefined = undefined

  constructor(symbols = [], config = {}) {
    this.api = new ApiQuotes(symbols, config)

    this.api.getSymbols()
    console.log(222);
  }
}