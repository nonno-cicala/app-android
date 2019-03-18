const media = (values, f) => {
  let accumulator = 0
  for(let i = 0; i < values.length; i++) {
    accumulator += f(values[i])
  }

  return accumulator / values.length
}

const square = x => x * x
const y = media([1, 4, 6, 7, 8, 10], x => x)
const v = media([1, 4, 6, 7, 8, 10], square)
const varianza = v - square(y)
console.log(varianza)
