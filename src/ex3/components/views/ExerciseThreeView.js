import { h } from 'hyperapp'

export default (state, actions) =>
  h('main', {}, [
    h('p', {}, '><' + '='.repeat(state.fishSize) + '°>'),
    h('button', { onclick: actions.decreaseFishSize }, '-'),
    h('button', { onclick: actions.increaseFishSize }, '+')
  ])

/*
en jsx :
<main>
  <p>{'><' + '='.repeat(state.fishSize) + '°>'}</p>
  <button onclick={actions.decreaseFishSize}>-</button>
  <button onclick={actions.increaseFishSize}>+</button>
</main>
*/
