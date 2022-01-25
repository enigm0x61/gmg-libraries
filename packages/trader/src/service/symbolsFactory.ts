import {SymbolsService} from './symbolsService';

export class SymbolsFactory {
  private static instance: SymbolsService | undefined = undefined;

  private constructor() {}

  static getInstance(): SymbolsService {
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

