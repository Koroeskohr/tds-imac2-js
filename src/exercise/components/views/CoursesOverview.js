import { h } from 'hyperapp'
import TeachersPattern from '../TeachersPattern'
import SubjectPattern from '../SubjectPattern'

export default (state) =>
  h('main', {},
    [
      h('header', {}, {}),
      h('h1', {style: "color : #B27000;"},'LISTE DES PROFS'),
      h('ul', {}, state.teachers.map(teacher => TeachersPattern({...teacher}))
       ),
      h('h1', {style: "color : #B27000;"},'LISTE DES MATIÈRES'),
      h('h2', {style: "color : #FFA000;"},'CATEGORIE ARTS : '),
      h('ul', {}, (state.teachers.filter(teacher => teacher.categorie === "art")).map(subject => SubjectPattern({
        ...subject,
      })),
      ),
      h('h2', {style: "color : #FFA000;"},'CATEGORIE SCIENCES : '),
      h('ul', {}, (state.teachers.filter(teacher => teacher.categorie === "science")).map(subject => SubjectPattern({
        ...subject,
      })),
      ),
    ]
  )