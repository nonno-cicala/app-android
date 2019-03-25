const getPrice = function () {
  return 2 * this.age
}

const tickets = [
  { age: 6, name: 'Luca' },
  { age: 18, name: 'Marco' }
]

const ticketsHydrated = tickets.map(ticket => ({ ...ticket, price: getPrice }))


for (let i = 0; i < ticketsHydrated.length; i++) {
  const price = ticketsHydrated[i].price()
  console.log(price)
}
