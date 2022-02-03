import axios from 'axios'
import queryString from 'query-string'
import merge from 'lodash/merge'

export const REPORT_PERIOD_MONTH = 'month'
export const REPORT_PERIOD_DAY = 'day'
export const REPORT_PERIOD_ALL = 'all'

class ApiQuotes {
  constructor(_ids, _config = {}) {
    const config = merge(
      {
        baseURL: '',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '',
        }
      },
      _config,
    )

    this.ids = _ids
    this.client = axios.create(config)
  }

  async getSymbols() {
    try {
      const response = await this.client.post('/symbols')
      const symbols = response?.data?.Symbols
      const result = {}

      for (let id of this.ids) {
        result[id] = symbols?.[id]?.[0]
      }

      return result
    } catch (e) {
      console.log(e.message);
    }
  }

  async getReportByPeriod(period, allSymbols = false) {
    const query = {
      symbols: this.ids,
      period,
    }

    if (allSymbols) {
      query.allSymbols = true
    }

    const body = queryString.stringify(
      query,
      {
        skipEmptyString: true
      })

    try {
      const response = await this.client.post('/report', {query: body})
      return response;
    } catch (e) {
      console.log(e.message);
    }
  }

  async getReport() {
    const response = await Promise.all([
      this.getReportByPeriod(REPORT_PERIOD_DAY),
      this.getReportByPeriod(REPORT_PERIOD_MONTH)]
    )

    return response.map(data => {
      return data.data
    })
  }
}

export default ApiQuotes
