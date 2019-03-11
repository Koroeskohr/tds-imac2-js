import { h } from 'hyperapp'

export default (state, actions) =>
    h('main',{},[
            h('h1', {}, state.name),
            h('h2', {}, state.job),
            h('p', {}, ['Got a life sentence : ', state.gotLifeSentence ? 'yes' : 'no'])
        ]
    )
    


/* <main>
  <h1>{name}</h1>
  <h2>{job}</h2>
  <p>Got a life sentence : {if gotLifeSentence then yes else no}</p>
</main> */