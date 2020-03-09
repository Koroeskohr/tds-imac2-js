import chai from 'chai'
import Description from '../src/example/components/Description'
import {h} from 'hyperapp'
import { toStructure } from './hyperappTestHelpers'

import ExerciseOneView from '../src/ex1/components/views/ExerciseOneView'
import ExerciseTwoView from '../src/ex2/components/views/ExerciseTwoView'
import ExerciseThreeView from '../src/ex3/components/views/ExerciseThreeView'

import stateTwo from '../src/ex2/state'
import stateThree from '../src/ex3/state'

import actionsThree from '../src/ex3/actions'

import IdCard from '../src/ex4/components/IdCard'
import IdCardEntry from '../src/ex4/components/IdCardEntry'

chai.expect()
const expect = chai.expect

const test = it

test('examples', () => {
  const node = Description({name: 'test'})
  console.log('Anatomy of a node : ', node)
  expect(Description).to.be.a('function')
  expect(node).to.have.keys(['nodeName', 'attributes', 'children', 'key'])
})

test('toStructure', () => {
  const node = Description({name: 'test'})
  expect(toStructure(node)).to.eq('div(h1($))')
})

test('ex1', () => {
  expect(toStructure(ExerciseOneView())).to.eq('main(header($),section(p($),p($,em($))))')
})

test('ex2', () => {
  expect(toStructure(ExerciseTwoView(stateTwo))).to.match(/^main\(h1\(\$\),h2\(\$\),p\(.*\)/, 'Invalid HTML structure')
  expect(ExerciseTwoView(stateTwo).children[0].children[0]).to.match(/Andy Dufresne/)
  expect(ExerciseTwoView(stateTwo).children[1].children[0]).to.match(/Banker/)
  expect(ExerciseTwoView(stateTwo).children[2].children[1]).to.match(/yes/)
})

test('ex3', () => {
  const node = ExerciseThreeView(stateThree, actionsThree)
  expect(toStructure(node)).to.eq('main(p($),button($),button($))')
  expect(stateThree.fishSize).to.eq(1)
  expect(actionsThree.increaseFishSize()(stateThree)).to.deep.eq({
    fishSize: 2
  })
  expect(actionsThree.decreaseFishSize()(stateThree)).to.deep.eq({
    fishSize: 0
  })
})

test('ex4', () => {
  const entry = IdCardEntry({key: 'key', value: 'value'})
  expect(toStructure(entry)).to.eq('p($,$,$)')
  const card = IdCard({picture: 'truc.jpg', listEntries: {pif: 'paf'}})
  expect(toStructure(card)).to.match(/div\(img,((p,?)+)\)/)
})
