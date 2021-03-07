import {
  every,
  createTag,
  img,
  figure,
  figcaption,
  p,
  generateMarkupForDog,
  generateMarkupForAllDogs,
  errorMessage,
  conditionallyDisplayDogs,
  div
} from '../src/td02/td02'

import state from '../src/td02/state'

import chai from 'chai'
chai.expect()
const expect = chai.expect

const test = it

test('exercice 1', () => {
  expect(every(x => x > 0 && x < 5, [1, 2, 3, 4])).to.eq(true)
  expect(every(x => x > 0 && x < 5, [1, 2, 3, 4, 5])).to.eq(false)
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

test('exercice 2.1 : higher-order function', () => {
  expect(div).to.be.a('function', 'div should be a function')
  expect(div).to.have.length(2, 'div should have 2 arguments')
  expect(div({ class: 'profile__root' }, [])).to.deep.eq({
    name: 'div',
    attributes: {
      class: 'profile__root'
    },
    children: []
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

test('exercice 2.4', () => {
  expect(
    conditionallyDisplayDogs(true, state.dogs)).to.deep.eq(generateMarkupForAllDogs(state.dogs),
    'User likes dogs, but their markup is not properly displayed!'
  )
  expect(
    expect(conditionallyDisplayDogs(false, state.dogs)).to.deep.eq(errorMessage),
    'User does not like dogs, but the error message is not shown!'
  )
})