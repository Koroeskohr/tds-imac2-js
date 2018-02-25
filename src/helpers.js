// eslint-disable-next-line
export const compose = (...fns) =>
  // eslint-disable-next-line
  fns.reverse().reduce(
    (prevFn, nextFn) => value => nextFn(prevFn(value)),
    value => value
  )
