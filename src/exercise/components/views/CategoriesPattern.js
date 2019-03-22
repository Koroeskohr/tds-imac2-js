import { h } from 'hyperapp'

export default (state) =>
  h('li', {}, [
    h('h3', {}, [state.name]), 
    h('img', {src: [state.photo], style:'float:left'}, ''),
    h('p', {style: 'font-size: 12px;'}, state.subject),
    h('p', {style: 'font-size: 12px;'}, state.heures),
    h('p', {style: 'font-size: 12px;'}, state.description),
    h('p', {style: 'font-size: 12px;'}, state.année),
  ])


