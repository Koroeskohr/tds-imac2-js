import { h } from 'hyperapp'
import taskView from './taskView'

export default (state) =>
  h('ul', {}, state.todolist.map(task => taskView({...task})))