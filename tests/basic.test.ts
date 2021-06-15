import MandiriMIBBOt from '..'
import Moobank from 'moobank-js'
import AxiosClient from 'moobank-js/lib/extensions/axios_client'
import Banking from '../lib/banking'

describe('Basic test', () => {
  it('init gateway', () => {
    const mandiriGateway = new Moobank().createGateway(
      new MandiriMIBBOt(),
      new AxiosClient()
    )
    expect(mandiriGateway).toBeInstanceOf(MandiriMIBBOt)

    // console.log(mandiriGateway.constructor['name'])

    expect(mandiriGateway.banking()).toBeInstanceOf(Banking)

    mandiriGateway
      .banking()
      .balance()
      .then((result) => {
        console.log()
      })
      .catch((err) => {
        console.log(err)
      })
  })
})
