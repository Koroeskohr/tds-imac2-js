export default {
  increaseFishSize: () => (state) => ({ ...state, fishSize: state.fishSize + 1 }),
  decreaseFishSize: () => (state) => ({ ...state, fishSize: state.fishSize - 1 })
}
