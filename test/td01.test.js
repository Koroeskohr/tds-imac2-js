import {a, c} from '../src/td01.js'

import chai from 'chai'
chai.expect()
const expect = chai.expect

it('exercice 1', () => {
  expect(a).to.eq(2)
  expect(c).to.deep.eq([1, 2, 2])
})
