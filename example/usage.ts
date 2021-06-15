import Moobank from 'moobank-js'
import AxiosClient from 'moobank-js/lib/extensions/axios_client'
import PuppeteerClient from 'moobank-js/lib/extensions/puppeteer_client'
import MandiriMIBBOt from '..'
import Banking from '../lib/banking'

/*
const mandiriGateway = new Moobank().createGateway(
  new MandiriMIBBOt(),
  new AxiosClient()
)

mandiriGateway
  .banking()
  .balance()
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  }) */


const mandiriGateway = new Moobank().createGateway(
  new MandiriMIBBOt(),
  new PuppeteerClient()
)

mandiriGateway
  .banking()
  .balance_puppeteer()
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
