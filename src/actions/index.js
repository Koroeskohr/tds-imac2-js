export default {
  add: (/* event (e) */) => (state) => ({...state, num: state.num + 1}),
  sub: (/* event (e) */) => (state) => ({...state, num: state.num - 1})
}
