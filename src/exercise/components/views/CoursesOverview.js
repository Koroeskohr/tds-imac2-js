import { h } from 'hyperapp'

export default (state, actions) =>
  <div>
    <input
      oninput={ (e) => actions.logEvent({name: 'input', event: e})}
      value={state.input.value} />
    <textarea
      oninput={ (e) => actions.exampleSet(e.target.value)}>
      {state.input.value}
    </textarea>
    <button onclick={e => actions.logEvent({name: 'click', event: e})}>click me</button>
  </div>
