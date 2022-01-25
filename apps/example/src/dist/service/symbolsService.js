import ApiQuotes from '../api/api';
export class SymbolsService {
    constructor(symbols = [], config = {}) {
        this.api = undefined;
        this.api = new ApiQuotes(symbols, config);
        this.api.getSymbols();
        console.log(222);
    }
}
