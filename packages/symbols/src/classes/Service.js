import ApiQuotes from './ApiQuotes'
import SocketQuotes from './SocketQuotes'
import throttle from 'lodash/throttle'
import {fetchError, fetchSuccess, updateItems} from '../store/actions'

class Service {
  constructor(symbols, _configs = {}) {
    this.symbols = symbols

    //     'fetchTotalData': false, //fetch data for all quotes of last month and last day
    //     'watching': false, //watching websocket, tick every second
    this._isAllowUpdate = false
    this._tmp = {}

    this.api = new ApiQuotes(symbols, _configs?.api)
    this.socket = new SocketQuotes(_configs?.socket)

    this._onUpdateThrottled = throttle(this.update.bind(this), 1000)
  }

  async run() {
    try {
      const symbols = await this.api.getSymbols()
      const report = await this.api.getReport()

      fetchSuccess(symbols, report)

      await this.socket.subscribe()
      await this.socket.watch(this.watch.bind(this))
    } catch (e) {
      fetchError()
    }

    return this
  }

  watch(data) {
    this.tmp = {...this.tmp, ...data}
    this._onUpdateThrottled(this.tmp)
  }

  update(data) {
    if (!this._isAllowUpdate) {
      this._isAllowUpdate = true
      return false
    }

    const result = {}

    for (let item of this.symbols) {
      if (data.hasOwnProperty(item)) {
        result[item] = data[item]
      }
    }

    if (Object.keys(result).length) {
      updateItems(result)
    }

    this.tmp = {}
  }
}

export default Service
