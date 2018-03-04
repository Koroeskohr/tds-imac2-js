import chai from 'chai'
import Description from '../src/components/Description'
import {h} from 'hyperapp'
import { toStructure } from './hyperappTestHelpers'

import ExerciseOneView from '../src/ex1/components/views/ExerciseOneView'
import ExerciseTwoView from '../src/ex2/components/views/ExerciseTwoView'

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
  expect(toStructure(ExerciseOneView())).to.eq('main(header($),section(p($),p($,em($))))')
})

test('ex2', () => {
  const state = {
    name: 'Andy Dufresne',
    job: 'Banker',
    gotLifeSentence: true
  }

  expect(toStructure(ExerciseTwoView(state))).to.match(/^main\(h1\(\$\),h2\(\$\),p\(.*\)/, 'Invalid HTML structure')
  expect(ExerciseTwoView(state).children[0].children[0]).to.match(/Andy Dufresne/)
  expect(ExerciseTwoView(state).children[1].children[0]).to.match(/Banker/)
  expect(ExerciseTwoView(state).children[2].children[1]).to.match(/yes/)
})
