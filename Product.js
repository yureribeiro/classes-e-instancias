class Product {
  constructor(name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }

    addToStock(quantity) {
       this.inStock += quantity
    }

    calculateDiscount(discount) {
     return this.price * ((100 - discount) / 100)
    }
}


const teclado = new Product('epomaker', '...', 100)
teclado.addToStock(12)

const priceWithDiscount = teclado.calculateDiscount(5)

console.log(teclado)
console.log(priceWithDiscount)