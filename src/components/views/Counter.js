import { h } from 'hyperapp'
import Description from '../Description'

export default (state, actions) =>
  h('div', {class: 'counter'}, [
    Description({name: state.name}),
    h('section', {}, [
      h('button', {class: 'sub', onclick: actions.sub, disabled: state.num < 1}, '-'),
      h('h1', {class: 'count'}, state.num),
      h('button', {class: 'add', onclick: actions.add}, '+')
    ])
  ])
