import socketcluster from 'socketcluster-client'
import merge from 'lodash/merge'

class SocketQuotes {
  constructor(_config = {}) {
    const config = merge(
      {
        hostname: `${process.env.WIDGET_TRADING_DOMAIN}`,
        port: `${process.env.WIDGET_TRADING_PORT}`,
        secure: true,
        rejectUnauthorized: false,
      },
      _config,
    )

    this.client = socketcluster.create(config)
  }

  async subscribe(channel = 'symbolTicker_prod') {
    this.channel = this.client.subscribe(channel)
    await this.channel.listener('subscribe').once()
  }

  async watch(callback) {
    for await (let data of this.channel) {
      if (callback) {
        callback(JSON.parse(data))
      }
    }
  }
}

export default SocketQuotes
