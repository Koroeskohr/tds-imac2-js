import { h } from 'hyperapp'

export default (props) =>
  h('div', null, [
    h('h1', null, 'Hi, ' + props.name)
  ])
