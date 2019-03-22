import { h } from 'hyperapp'

export default props =>
  h('li', {}, [
    h('h4', {}, [props.subject, ' :']),
    h('ul', {}, [
      h('li', {}, ['Enseignant : ', props.name]),
      h('li', {}, ['Nombre d\'heures : ', props.heures]),
      h('li', {}, ['Année d\'enseignement : ', props.année.map(n => 'A' + n).join(', ')]),
      h('li', {}, ['Description : ', props.description])
    ])
  ])
