/**
* Funzione calculator
* La funzione calculator restituisce il risultato di un'operazione aritmetica.
* Parametri di input:
* @param {Function} op la funzione che esegue l'operazione aritmetica. 
* @param {Number} x il primo operando di op
* @param {Number} y il secondo operando di op
*
* @return {Number} il risultato dell'operazione aritmetica definita in op
*/
const calculator = function (op, x, y) {
  if (typeof op !== 'function') {
    throw new Error('Op non è una funzione')
  }
  if (isNaN(x) || isNaN(y)) {
    throw new Error('x o y non sono numeri')
  }
  return op(Number(x), Number(y))
}

/**
* Funzione getOperation
* La funzione getOperation costruisce una funzione in grado di eseguire una funzione aritmetica a partire del suo simbolo stringa
* Parametri di input
* @param {String} opSymbol l'operatore della funzione da costruire può esser '+', '-', '*', '/'
*
* @return {Function} una funzione in grado di eseguire l'operazione aritmetica specificata in opSymbol. 
* La funzione costruita prende in input due parametri a, b che rappresentano gli operandi dell'operazione  
*/
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

/**
* Catena di chiamate per eseguire una generica funzione aritmetica.
* NB la funzione prompt() richiede all'utente di inserire all'utente i dati necessari per completare l'operazione nel seguente ordine:
* 1. Richiede l'inserimento del simbolo dell'operazione. Può essere '+', '-', '*', '/', se il simbolo è diverso lancia un Errore
* 2. Richiede l'inserimento del primo operando
* 3. Richiede l'inserimento del secondo operando
* NB solo all'immisione del secondo operando avviene il controllo se questi ultimi sono realmente dei numeri.
* SCHEMA CHIAMATE:
* console.log --> calculator --> getOperation
*                                     --> prompt('Inerisci l\'operazione')
*                                     <-- ritorna il simbolo dell'operazione
*                            <-- ritorna la funzione in grado di effettuare un'operazione in base al simbolo inserito
*                            --> prompt('Inserisci il primo valore')
*                            <-- ritorna il primo operando (parametro formale x) di calculator 
*                            --> prompt('Inserisi il secondo valore')
*                            <-- ritorna il secondo operando (parametro formale y) di calculator
*                            --> op(x, y) se i controlli sui parametri sono ok (non viene lanciato l'errore) calculator chiama op
*                            <-- ritorna il risultato a calculator
*            <-- calculator ritorna il risultato a console.log
* Console log stampa il risultato
*/
console.log(
  calculator(
    getOperation(
      prompt('Inserici l\'operazione')
    ), 
    prompt('Inserisci il primo valore'), 
    prompt('Inserisci il secondo vlore')
  )
)
