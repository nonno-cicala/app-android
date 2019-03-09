/** 
* SOLUZIONE DELL'ESERCIZIO: 
* Scrivere un algoritmo che, dato il prezzo di un prodotto, 
* applichi uno sconto del 12% se il prezzo è inferiore a € 30,00, del 25% altrimenti.
* CODEPEN: https://codepen.io/marcoski/pen/pYwWYJ
*/
const price = Number(prompt('Inserisci il prezzo del prodotto da scontare'))
let discountedPrice
if (price < 30) {
  discountedPrice = price * ( ( 100 - 12 ) / 100 )
} else {
  discountedPrice = price * ( (100 - 25 ) / 100)
}

console.log(`Il prezzo del prodotto intero è: ${price} scontato sarà: ${discountedPrice}`)
