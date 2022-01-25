import axios, {AxiosInstance, AxiosResponse} from 'axios';
import queryString from 'query-string';
import merge from 'lodash/merge';
import {API_REPORT_PERIOD_DAY, API_REPORT_PERIOD_MONTH} from './api.constant';

class ApiQuotes {
  public ids: any;
  public client: AxiosInstance;

  // @ts-ignore
  constructor(_ids, _config) {
    const config: any = merge(
      {
        baseURL: 'https://back.webtemplates.space/api/trading',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer TJHrdoAT3v`,
        },
      },
      _config,
    )
    //
    this.ids = _ids
    this.client = axios.create(config)
  }

  public getSymbols() {
    return this.client.post('/symbols').then((response) => {
      const symbols = response?.data?.Symbols;

      console.log(symbols);

      return symbols;
    })
  }

  // async getSymbols(): Promise<any> {
  // try {
  //   const response = await this.client.post('/symbols')
  //   const symbols = response?.data?.Symbols
  //   const result = {}
  //
  //   for (let id of this.ids) {
  //     // @ts-ignore
  //     result[id] = symbols?.[id]?.[0]
  //   }
  //
  //   return result
  // } catch (e) {
  //   // @ts-ignore
  //   console.log(e.message);
  // }
  // }
  //
  // async getReportByPeriod(period: string, allSymbols = false) {
  //   const query: any = {
  //     symbols: this.ids,
  //     period,
  //   }
  //
  //   if (allSymbols) {
  //     // @ts-ignore
  //     query?.allSymbols = true
  //   }
  //
  //   const body = queryString.stringify(
  //     query,
  //     {
  //       skipEmptyString: true
  //     })
  //
  //   try {
  //     const response = await this.client.post('/report', {query: body})
  //     return response;
  //   } catch (e) {
  //     // console.log(e.message);
  //   }
  // }
  //
  // async getReport() {
  //   const response = await Promise.all([
  //     this.getReportByPeriod(API_REPORT_PERIOD_DAY),
  //     this.getReportByPeriod(API_REPORT_PERIOD_MONTH)]
  //   )
  //
  //   return response.map(data => {
  //     return data?.data
  //   })
  // }
}

export default ApiQuotes
