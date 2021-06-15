import AbstractEntity from 'moobank-js/lib/entities/abstract_entity';
import AbstractResponse from 'moobank-js/lib/messages/abstract_response'
import Balance from 'moobank-js/lib/entities/balance'

export default class LandingResponse extends AbstractResponse {
  getData(): AbstractEntity {
    const balance: Balance = {
      balance: 0,
      currency: 'IDR'
    }
    return balance
  }
}
