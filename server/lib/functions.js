const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)

const trace = label => value => {
  console.log(`${label}: ${value}`)
  return value
}

module.exports = { compose, pipe, trace }