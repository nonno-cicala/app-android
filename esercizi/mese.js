/** 
* SOLUZIONE DELL'ESERCIZIO: 
* Scrivere un algoritmo che, preso in input un valore compreso tra 1 e 12, visualizzi il nome del mese corrispondente
* CODEPEN: https://codepen.io/marcoski/pen/GeEOKP
*/
const monthNumber = Number(prompt('Inserisci il numero del mese compreso tra 1 e 12'))

if (isNaN(monthNumber)) {
  console.log('Non hai inserito un numero non posso calcolare il nome del mese')
} else {
  if (monthNumber === 1) {
    console.log('MESE: Gennaio')
  } else if (monthNumber === 2) {
    console.log('MESE: Febbraio')
  } else if (monthNumber === 3) {
    console.log('MESE: Marzo')
  } else if (monthNumber === 4) {
    console.log('MESE: Aprile')
  } else if (monthNumber === 5) {
    console.log('MESE: Maggio')
  } else if (monthNumber === 6) {
    console.log('MESE: Giugno')
  } else if (monthNumber === 7) {
    console.log('MESE: Luglio')
  } else if (monthNumber === 8) {
    console.log('MESE: Agosto')
  } else if (monthNumber === 9) {
    console.log('MESE: Settembre')
  } else if (monthNumber === 10) {
    console.log('MESE: Ottobre')
  } else if (monthNumber === 11) {
    console.log('MESE: Novembre')
  } else if (monthNumber === 12) {
    console.log('MESE: Dicembre')
  } else {
    console.log('Il numero inserito non è un mese o è troppo grande o è troppo piccolo deve essere compreso tra 1 e 12')
  }
}
