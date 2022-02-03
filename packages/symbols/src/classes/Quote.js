const DELTA_STATUS_UP = 'up'
const DELTA_STATUS_DOWN = 'down'
const DELTA_STATUS_ZERO = 'zero'

class Quote {
  constructor(data, ticks = []) {
    this.current = data
    this.ticks = ticks
    this.report = {
      'month': [],
      'day': [],
    }
  }

  get name() {
    return this.current?.Symbol
  }

  get data() {
    return this.current
  }

  get pointValue() {
    return this.current?.Point
  }

  get bidValue() {
    return this.current?.Bid
  }

  get askValue() {
    return this.current?.Ask
  }

  get openPriceValue() {
    return this.latestTick?.OpenPrice
  }

  get latestTick() {
    return this.report.month[this.report.month.length - 1]
  }

  update(data) {
    this.current = {
      ...this.current,
      ...data,
    }

    return this
  }

  setReport(period, report = []) {
    this.report[period] = report

    return this
  }

  setTicks(ticks) {
    this.ticks = ticks

    return this
  }

  getDelta() {
    if (!this.openPriceValue === undefined) {
      return null
    }

    const absolute = this.bidValue - (this.openPriceValue * this.pointValue)
    const percent = (absolute / (this.openPriceValue * this.pointValue)) * 100
    const status = absolute === 0 ? DELTA_STATUS_ZERO : (absolute > 0 ? DELTA_STATUS_UP : DELTA_STATUS_DOWN)
    const up = status === DELTA_STATUS_UP

    return {
      absolute,
      percent,
      status,
      up,
    }
  }
}

export default Quote
