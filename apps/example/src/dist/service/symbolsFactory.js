import { SymbolsService } from './symbolsService';
export class SymbolsFactory {
    constructor() { }
    static getInstance() {
        if (SymbolsFactory.instance === undefined) {
            throw new Error('instance not created');
        }
        return SymbolsFactory.instance;
    }
    static create() {
        if (!SymbolsFactory.instance) {
            SymbolsFactory.instance = new SymbolsService();
        }
        return SymbolsFactory.instance;
    }
}
SymbolsFactory.instance = undefined;
