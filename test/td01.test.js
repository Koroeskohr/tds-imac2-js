'use strict'

import {
  ex1,
  ex2,
  ex3,
  scope,
  transformNumber, makeSomethingOutOfNumber,
  sig1, sig2, sig3, sig4, generateArticleWithSignature, finalArticle
} from '../src/td01.js'

import chai from 'chai'
chai.expect()
const expect = chai.expect

const test = it

test('exercice 1', () => {
  expect(ex1).to.eq(54)
})

test('exercice 2', () => (
  expect(ex2).to.deep.eq(['dog', 'cat', 'faverjon', 'bird', 'lion', 'squirrel', 'bear', 'pig'])
))

test('exercice 3', () => {
  expect(ex3('dog')).to.eq('cat')
  expect(ex3('anything')).to.eq('anything')
})

test('exercice 4', () => {
  expect(scope()).to.eq('cat')
})

test('exercice 5', () => {
  expect(makeSomethingOutOfNumber).to.be.a('function')
  expect(makeSomethingOutOfNumber.length).to.eq(2)
  expect(makeSomethingOutOfNumber(transformNumber, 41)).to.eq(42)
})

test('exercice 6', () => {
  expect(generateArticleWithSignature).to.be.a('function')
  expect(generateArticleWithSignature.length).to.eq(3)
  expect(finalArticle).to.match(/enfin régénérés/)

  const hasSig = /Pickle/.test(finalArticle) ||
    /Jean-Michel/.test(finalArticle) ||
    /First of Her Name/.test(finalArticle) ||
    /l'immortel/.test(finalArticle)
  expect(hasSig).to.eq(true)
})
