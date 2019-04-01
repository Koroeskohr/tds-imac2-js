import { h } from 'hyperapp'

export default (state) =>
  h('li', {}, [
    h('h3', {}, [state.todolist.title])
  ])