export default {
  logEvent: (value) => state => {
    console.log(value.name, value.event)
    return state
  },
  exampleSet: value => state => ({...state, input: {...state.input, value}})
}
