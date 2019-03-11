const calculator = function (op, x, y) {
  if (typeof op !== 'function') {
    throw new Error('Op non è una funzione')
  }
  if (isNaN(x) || isNaN(y)) {
    throw new Error('x o y non sono numeri')
  }
  return op(Number(x), Number(y))
}

const getOperation = function(opSymbol) {
  if (opSymbol === '+') {
    return function (a, b) { return a + b }
  } else if (opSymbol === '-') {
    return function (a, b) { return a - b }
  } else if (opSymbol === '*') {
    return function (a, b) { return a * b }
  } else if (opSymbol === '/') {
    return function (a, b) { return a / b }
  }
  throw new Error('opSymbol non è un simbolo valido')
} 

console.log(
  calculator(
    getOperation(
      prompt('Inserici l\'operazione')
    ), 
    prompt('Inserisci il primo valore'), 
    prompt('Inserisci il secondo vlore')
  )
)
