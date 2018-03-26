import {h} from 'hyperapp'

import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

import { alwaysResolve, alwaysReject } from '../src/ex01'

require('es6-promise').polyfill()
require('isomorphic-fetch')

chai.use(chaiAsPromised)

chai.expect()
const expect = chai.expect

const test = it

test('fetch', (done) => {
  fetch('https://google.com').then(() => done())
})

test('exercise 1.1', () => {
  expect(alwaysResolve).to.be.a('function')
  expect(alwaysResolve()).to.be.a('Promise')
  expect(alwaysResolve()).to.be.fulfilled
})

test('exercise 1.2', () => {
  expect(alwaysReject).to.be.a('function')
  expect(alwaysReject()).to.be.a('Promise')
  expect(alwaysReject()).to.be.rejected
})
