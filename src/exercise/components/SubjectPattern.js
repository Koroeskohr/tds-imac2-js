import { h } from 'hyperapp'

export default (state) =>
  h('li', {}, [
    h('h3', {}, [state.subject]), 
    h('p', {style: 'font-size: 12px;'}, state.heures),
    h('p', {style: 'font-size: 12px;'}, state.description),
    h('p', {style: 'font-size: 12px;'}, state.année),
    h('p', {style: 'font-size: 12px;'}, state.categorie),
  ])


