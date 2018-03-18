import { h } from 'hyperapp'

export default (props) =>
  h('p', {}, [props.key, ' : ', props.value])
