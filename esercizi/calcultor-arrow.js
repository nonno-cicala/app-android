const calculator = op => {
  if (op === '+') {
    return a => b =>  a + b
  } else if (op === '-') {
    return a => b => a - b
  } else if (op === '*') {
    return a => b => a * b
  } else if (op === '/') {
    return a => b => a / b
  }
}

console.log(calculator('+')(2)(3))
