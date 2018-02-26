import {
  every,
  createTag,
  img,
  figure,
  figcaption,
  p,
  generateMarkupForDog,
  generateMarkupForAllDogs
} from '../src/td02/td02_correction'

import state from '../src/td02/state'

import chai from 'chai'
chai.expect()
const expect = chai.expect

const test = it

test('exercice 1', () => {
  expect(every(x => x > 0 && x < 5, [1, 2, 3, 4])).to.eq(true)
})

test('createTag', () => {
  expect(createTag).to.be.a('function')
  expect(
    createTag('div', {class: 'header'}, [])
  ).to.deep.eq({
    name: 'div',
    attributes: {class: 'header'},
    children: []
  })
})

test('exercice 2.1 : img', () => {
  expect(img).to.be.a('function')
  expect(img({src: 'http://example.com/img.jpg'})).to.deep.eq({
    name: 'img',
    attributes: {src: 'http://example.com/img.jpg'},
    children: []
  })
})
test('exercice 2.1 : figure', () => {
  expect(figure).to.be.a('function')
  expect(figure(null, [])).to.deep.eq({
    name: 'figure',
    attributes: null,
    children: []
  })
})

test('exercice 2.1 : figcaption', () => {
  expect(figcaption).to.be.a('function')
  expect(figcaption(null, [])).to.deep.eq({
    name: 'figcaption',
    attributes: null,
    children: []
  })
})

test('exercice 2.1 : p', () => {
  expect(p).to.be.a('function')
  expect(p(null, ['value'])).to.deep.eq({
    name: 'p',
    attributes: null,
    children: ['value']
  })
})

test('exercice 2.2', () => {
  const dogMarkup = generateMarkupForDog('url', 'doggo', 'pretty puppy')
  expect(dogMarkup.name).to.eq('figure')
  expect(dogMarkup.children[0].name).to.eq('img')
  expect(dogMarkup.children[0].attributes.src).to.eq('url')
  expect(dogMarkup.children[1].name).to.eq('figcaption')
  expect(dogMarkup.children[1].children[0].name).to.eq('p')
  expect(dogMarkup.children[1].children[0].children).to.deep.eq(['doggo'])
  expect(dogMarkup.children[1].children[1].name).to.eq('p')
  expect(dogMarkup.children[1].children[1].children).to.deep.eq(['pretty puppy'])
})

test('exercice 2.3', () => {
  const dogsMarkup = generateMarkupForAllDogs(state.dogs)
  expect(dogsMarkup.name).to.eq('div')
})
