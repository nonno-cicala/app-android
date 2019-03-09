/** 
* SOLUZIONE DELL'ESERCIZIO: 
* Scrivere l'algoritmo che, letto in input un valore numerico, dica se è positivo, negativo o nullo
* CODEPEN: https://codepen.io/marcoski/pen/pYwWYJ
*/
const x = Number(prompt('Inserisci un numero (prova anche una stringa o lascia vuoto)'))

if (isNaN(x)) {
  console.log('x non è un numero')
} else {
  if (x < 0) {
    console.log('x è negativo')
  } else if (x === 0) {
    console.log('x è zero')
  } else {
    console.log('x è positivo')
  }
}
