import { h } from 'hyperapp'
import IdCardEntry from './IdCardEntry'

export default (props) =>
  h('div', {}, [
    h('img', {src: 'img.jpg'}, []),
    ...Object.entries(props.listEntries)
      .map(([key, value]) => IdCardEntry({key: key, value: value}))
  ])