import AbstractRequest from 'moobank-js/lib/messages/abstract_request';
import ResponseInterface from 'moobank-js/lib/messages/response_interface';

export default class GetBalance extends AbstractRequest {
  getEndpoint(): string {
    return ''
  }

  getOption(): object {
    return {
      headless: true
    }
  }

  createResponse(response: any): ResponseInterface {
    return
  }

  async pageFlow() {
    const page = await this.httpClient.getPage()

    await page.goto('https://mib.bankmandiri.co.id')

    return page
  }
}