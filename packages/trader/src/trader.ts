import {TraderConfig} from './trader.interface';

class Trader {
  private static instance: Trader;
  private config: TraderConfig;

  private constructor() {
  }

  public static getInstance(): Trader {
    if (!Trader.instance) {
      Trader.instance = new Trader();
    }

    return Trader.instance;
  }

  public run(config: TraderConfig): void {
    this.config = config;
  }
}
