import { h } from 'hyperapp'

export default (state, actions) => // TODO
  <main>
    <h1>{state.name}</h1>
    <h2>{state.job}</h2>
    <p>Got a life sentence : {state.gotLifeSentence ? 'yes' : 'no'}</p>
  </main>
