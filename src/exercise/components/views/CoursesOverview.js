import { h } from 'hyperapp'
import allTasksView from '../allTasksView'

export default (state, actions) =>
  <div>

    <allTasksView todolist={state.todolist} /> 

    <input oninput={ (e) => actions.logEvent({name: 'input', event: e})} value={state.input.value} />
   
    <textarea oninput={ (e) => actions.exampleSet(e.target.value)}>
      {state.input.value}
    </textarea>

    <button onclick={() => actions.addToList(state)}>Add to list</button>

  </div>
