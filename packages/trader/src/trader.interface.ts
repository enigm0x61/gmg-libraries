import {AGClientSocket} from 'socketcluster-client';
import {AxiosRequestConfig} from 'axios';
import {IntervalList} from './intervals/intervals.interface';

export interface TraderConfig {
  api: {
    timeframe: IntervalList[],
    config: AxiosRequestConfig,
  },
  socket: {
    enabled: boolean,
    config: AGClientSocket.ClientOptions,
  },
}
