const numbers = [1, 4, 6, 7, 8, 10]

let accumulator = 0
for(let i = 0; i < numbers.length; i++) {
  accumulator += numbers[i]
}

const media = accumulator / numbers.length

// CALCOLO I QUADRATI DEGLI ELEMENTI DELL'ARRAY
let square = [] 
for(let i = 0; i < numbers.length; i++) {
  square[i] = numbers[i] * numbers[i]
}

// CALCOLO LA MEDIA DEI QUADRATI
accumulator = 0;
for (let i = 0; i < square.length; i++) {
  accumulator += square[i]
}
let squareMedia = accumulator / square.length

// CALCOLO LA VARIANZA COME MEDIA DEI QUADRATI MENO IL QUADRATO DELLA MEDIA
const varianza = squareMedia - (media * media)
console.log(varianza)
