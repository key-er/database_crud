// CRUD


const Product  = require('./Product.js');


// C - CREATE
var newItem = {
    productId: 7007,
    type: 'software',
    name: 'windows10',
    price: 150,
    description: 'MS Windows 10 installation CD'
  }

Product.create(newItem).then((prod) => {
  console.log(prod)
}).catch((err) => {
  console.log(err)
})

// R - READ (FIND)

Product.findAll()
Product.findById(1).then(product => {
  console.log(product)
})

// U - UPDATE

Product.findAll()
Product.findById(1).then(product => {
  console.log(product.price) // price = 350
  product.update({price: 129}) // price = 129 modified
  console.log(product.price)

})




// // D - DELETE
Product.find({where: {name: 'tablet'}}).then((tablet) => {
  tablet.destroy()
})

Product.findById(1).then((tablet) => {
  console.log('deleting', tablet)
  tablet.destroy()
})



// // EXTRA - LIMIT and SORT

// note order is an array
Product.findAll({limit: 5, order: ['price']}).then((top3) => {
  console.log(top3)
})



// DESC or ASC for descending or ascending order (note sub array in this case)
Product.findAll({limit: 5, order: [['price', 'ASC']]}).then((top3) => {
  console.log(top3)
})
