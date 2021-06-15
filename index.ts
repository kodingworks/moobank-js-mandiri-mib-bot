import AbstractGateway from 'moobank-js/lib/abstract_gateway'
import GatewayInterface from 'moobank-js/lib/gateway_interface'
import Banking from './lib/banking'

export default class MandiriMIBBOt extends AbstractGateway {
  getName(): string {
    return 'Mandiri MIB Bot'
  }
  getModuleName(): string {
    return 'mandiri-mib-bot'
  }

  banking(): GatewayInterface {
    const gateway = new Banking
    gateway.initialize(this.httpClient, this.getParameters())

    return gateway
  }
}
