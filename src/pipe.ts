const pipe = <B, T extends B>(
  baseValue: B,
  ...functions: Array<(stackTrace: B | T) => T>
) => (
  functions.reduce(
    (currentValue, currentFunction) => currentFunction(currentValue),
    baseValue
  )
);

export default pipe;