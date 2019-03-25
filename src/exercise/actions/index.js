export default {
  logEvent: (value) => state => {
    console.log(value.name, value.event)
    return state
  },

  exampleSet: value => state => ({...state, input: {...state.input, value}}),

  addToList: () => state => {
    const myList = { ...state, todolist: [...state.todolist, {title: state.input.value}]}
    console.log(myList)
    return myList
  }
}