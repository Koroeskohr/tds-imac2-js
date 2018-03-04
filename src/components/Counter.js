import { h } from 'hyperapp'
import Description from './Description'

/**
 * first object in the store is 'state' (an object - {})
 * second object in the store is 'actions' (an object - {})
 * here we destructure what is needed
 * 'num' from 'state' and 'add'/'sub' from 'actions'
 */
export default ({ num }, { add, sub }) =>
  h('div', {class: 'counter'}, [
    Description(),
    h('section', {}, [
      h('button', {class: 'sub', onclick: sub, disabled: num < 1}, '-'),
      h('h1', {class: 'count'}, num),
      h('button', {class: 'add', onclick: add}, '+')
    ])
  ])
