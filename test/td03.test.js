import chai from 'chai'
import Description from '../src/components/Description'
import {h} from 'hyperapp'
import { toStructure } from './hyperappTestHelpers'

import Home from '../src/ex1/components/views/Home'

chai.expect()
const expect = chai.expect

const test = it

test('examples', () => {
  const node = Description({name: 'test'})
  console.log('Anatomy of a node : ', node)
  expect(Description).to.be.a('function')
  expect(node).to.have.keys(['nodeName', 'attributes', 'children', 'key'])
})

describe('tools', () => {
  test('toStructure', () => {
    const node = Description({name: 'test'})
    expect(toStructure(node)).to.eq('div(h1($))')
  })
})

test('ex1', () => {
  expect(toStructure(Home())).to.eq('main(header($),section(p($),p($,em($))))')
})
