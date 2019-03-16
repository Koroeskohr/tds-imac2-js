import { h } from 'hyperapp'

export default (/* state, actions */) => {
  const list = [
    {id: '5ckeoz', color: 'red', height: 160},
    {id: 'fpu8eg', color: 'blue', height: 150},
    {id: 'duc9kf', color: 'green', height: 100},
    {id: 'bvp63d', color: 'red', height: 60}
  ]

  return h('ul', {}, list.map(
    ({color, height, id}) => h('li', { key: id }, color + ' : ' + height))
  )
}
