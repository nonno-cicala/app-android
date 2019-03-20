const products = [
  { price: 10, name: 'Tavolo', quantity: 4 },
  { price: 7, name: 'Sedia', quantity: 14 },
  { price: 15, name: 'Tavolo', quantity: 1 },
  { price: 17, name: 'Sedia', quantity: 20 },
]
const productBase = {
  total: function () {
    const discount = () => this.quantity > 4 && this.quantity <= 10
        ? 1 - 0.10
        : this.quantity > 10 && this.quantity <= 20
          ? 1 - 0.15
          : this.quantity > 20 ? 1 - 0.20 : 1
    return this.price * this.quantity * discount()
  }
}

const media = (values, f) => {
  let accumulator = 0
  for(let i = 0; i < values.length; i++) {
    accumulator += f(values[i])
  }

  return accumulator / values.length
}

const productsMixin = products.map(o => Object.assign(o, productBase))

const total = productsMixin
  .filter(product => product.name === 'Sedia')
  .reduce((acc, product) => acc + product.total(), 0)
const m = media(productsMixin.map(product => product.price), x => x)
console.log(total, m)
