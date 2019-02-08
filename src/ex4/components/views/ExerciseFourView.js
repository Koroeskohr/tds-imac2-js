import { h } from 'hyperapp'
import IdCard from '../IdCard'

export default (state) =>
  h('main', {}, [
    IdCard({picture: 'img.jpg', listEntries: state.person})
  ])
