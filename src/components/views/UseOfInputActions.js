import { h } from 'hyperapp'

export default (state, actions) => {
  return (
    <div>
      {/* Tout ceci est du JSX. Je vous conseille de l'utiliser */}
      {/* Regardez votre console javascript ! */}
      <h1>{state.input.value}</h1>
      <div>
        <h3>Change state</h3>
        <input oninput={e => actions.exampleSetState(e.target.value)} value={state.input.value} />
      </div>
      <div>
        <h3>Log event (ouvrez la console)</h3>
        <textarea oninput={e => actions.logEvent({name: 'setTextarea', event: e})}>
          {state.input.value}
        </textarea>
      </div>
    </div>
  )
}
