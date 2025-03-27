/*
// 1 bottle of milk:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) ➞ 1.5

// 1 bottle of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4

// 3 bottles of milk:
getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]) ➞ 4.5

// Several groceries:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) ➞ 10.4

// Some cheap candy:
getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
  ]) ➞ 0.3
  */

function getTotalPrice(arrOfProducts) {
    // init output variable
    let totalPrice = 0

    // loop through products, adding together the quantity of the current product
    for (let item of arrOfProducts) {
        totalPrice += (item.price) * (item.quantity)
    }

    // using .reduce() HOF
    // totalPrice = arrOfProducts.reduce((prev, curr) => {
    //     return { price: (prev.price * prev.quantity) + (curr.price * curr.quantity), quantity: 1 }
    // }
    //     , { price: 0, quantity: 0 })

    // // return the sum
    // return totalPrice.price

    return  new Intl.NumberFormat("gb-GB", { style: "currency", currency: "GBP" })
        .format(totalPrice)
}

let testData1 = [{ product: "Milk", quantity: 1, price: 1.50 }]
let testData2 = [
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
]
let testData3 = [{ product: "Milk", quantity: 3, price: 1.50 }]
let testData4 = [
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
]
let testData5 = [
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
]

console.log(getTotalPrice(testData1))
console.log(getTotalPrice(testData2))
console.log(getTotalPrice(testData3))
console.log(getTotalPrice(testData4))
console.log(getTotalPrice(testData5))