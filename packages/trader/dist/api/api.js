"use strict";
// import axios from 'axios';
// import queryString from 'query-string';
// import merge from 'lodash/merge';
// import {API_REPORT_PERIOD_DAY, API_REPORT_PERIOD_MONTH} from './api.constant';
//
// class ApiQuotes {
//   public ids: [];
//   public client: [];
//
//   constructor(_ids: [], _config = {}) {
//     const config: {} = merge(
//       {
//         baseURL: process.env.WIDGET_TRADING_BACKEND,
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${process.env.WIDGET_TRADING_AUTH_KEY}`,
//         }
//       },
//       _config,
//     )
//
//     this.ids = _ids
//     this.client = axios.create(config)
//   }
//
//   async getSymbols() {
//     try {
//       const response = await this.client.post('/symbols')
//       const symbols = response?.data?.Symbols
//       const result = {}
//
//       for (let id of this.ids) {
//         result[id] = symbols?.[id]?.[0]
//       }
//
//       return result
//     } catch (e) {
//       console.log(e.message);
//     }
//   }
//
//   async getReportByPeriod(period, allSymbols = false) {
//     const query = {
//       symbols: this.ids,
//       period,
//     }
//
//     if (allSymbols) {
//       query.allSymbols = true
//     }
//
//     const body = queryString.stringify(
//       query,
//       {
//         skipEmptyString: true
//       })
//
//     try {
//       const response = await this.client.post('/report', {query: body})
//       return response;
//     } catch (e) {
//       console.log(e.message);
//     }
//   }
//
//   async getReport() {
//     const response = await Promise.all([
//       this.getReportByPeriod(API_REPORT_PERIOD_DAY),
//       this.getReportByPeriod(API_REPORT_PERIOD_MONTH)]
//     )
//
//     return response.map(data => {
//       return data.data
//     })
//   }
// }
//
// export default ApiQuotes
