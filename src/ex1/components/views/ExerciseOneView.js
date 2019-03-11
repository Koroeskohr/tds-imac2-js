import { h } from 'hyperapp'

export default (state, actions) => 
      h('main',{},[
        h('header', {class: 'ex1__header'}, 'Trying hyperapp'),
        h('section', {},[
            h('p', null, 'Hi'),
            h('p', null, ['Hyperapp is a JS micro framework intended to be',h('em',null,'as barebones as possible'),
        ])
        ])
    ])


// ```html
//   <main>
//     <header class="ex1__header">
//       Trying hyperapp
//     </header>
//     <section>
//       <p>Hi !</p>
//       <p>Hyperapp is a JS micro framework intended to be <em>as barebones as possible.</em></p>
//     </section>
//   </main>
// `