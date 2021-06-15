import AbstractGateway from 'moobank-js/lib/abstract_gateway';
import Balance from 'moobank-js/lib/entities/balance'
import LandingRequest from './messages/authentication/landing_request';
import GetBalance from './messages/get_balance';

export default class Banking extends AbstractGateway {
  getName(): string {
    return 'Mandiri MIB Bot - Bangking'
  }
  getModuleName(): string {
    return 'banking.service.scrapper.business.mandiri'
  }

  balance(): any {
    // let gateway: Balance

    return this.createRequest(new LandingRequest).send()

    // return gateway
  }

  balance_puppeteer(): any {
    return this.createRequest(new GetBalance, {headless: true}).send()
  }
}