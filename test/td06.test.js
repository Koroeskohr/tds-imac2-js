import {h} from 'hyperapp'

import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

require('es6-promise').polyfill()
require('isomorphic-fetch')

chai.use(chaiAsPromised)

chai.expect()
const expect = chai.expect

const test = it

test('fetch', (done) => {
  fetch('https://google.com').then(() => done())
})