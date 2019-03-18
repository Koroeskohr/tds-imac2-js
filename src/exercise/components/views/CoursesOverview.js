import { h } from 'hyperapp'



export default (state, actions) =>
    h('main',{},
        [
            h('header', {}, {}),
            
            h('ul', {}, ['LISTE DES PROF', state.teachers.map(teacher =>
                h('li', {},[
                    h('img',{src: teacher.photo, style : 'float: left;'},{}),
                       h('p',{style : 'font-size: 44px;'},teacher.name), h('p',{style : 'font-size: 12px;'},teacher.subject)])
            ) ]),
            
            h('ul', {}, ['LISTE DES MATIERES', state.teachers.map(teacher =>
                h('li', {}, [teacher.subject])
            ) ]),
        ]
    )
    
