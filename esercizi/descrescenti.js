/** 
* SOLUZIONE DELL'ESERCIZIO: 
* Scrivere un algoritmo che visualizza in ordine decrescente i numeri naturali da 30 a 15
* CODEPEN: https://codepen.io/marcoski/pen/jJwaqb
*/
// VERSIONE WHILE DO
console.log('VERSIONE WHILE')
let x = 30
while (x >= 15) {
  console.log(x)
  x -= 1
}

// VERSIONE FOR
console.log('VERSIONE FOR')
for (let x = 30; x >= 15; x--) {
  console.log(x)
}
