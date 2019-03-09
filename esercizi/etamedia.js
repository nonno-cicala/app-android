/**
* SOLUZIONE DELL'ESERCIZIO: Scrivere un algoritmo che, date le età di tre persone, calcoli l’età media. 
* CODEPEN: https://codepen.io/marcoski/pen/jJwGQN
*/

const age1 = Number(prompt('Inserisci l\'età della prima persona'))
const age2 = Number(prompt('Inserisci l\'età della seconda persona'))
const age3 = Number(prompt('Inderisci l\'età della terza persona'))

const avg = (age1 + age2 + age3) / 3
console.log(`La media è di ${avg} anni`)
