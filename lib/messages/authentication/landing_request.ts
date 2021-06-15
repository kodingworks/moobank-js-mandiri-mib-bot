import AbstractRequest from 'moobank-js/lib/messages/abstract_request'
import ResponseInterface from 'moobank-js/lib/messages/response_interface'
import LandingResponse from './landing_response'

export default class LandingRequest extends AbstractRequest {
  getEndpoint(): string {
    return 'https://mib.bankmandiri.co.id/sme/common/login.do'
  }

  getOption(): object {
    return {
      withCredentials: true,
    }
  }

  createResponse(response: any): ResponseInterface {
    return new LandingResponse().createResponse(response)
  }
}