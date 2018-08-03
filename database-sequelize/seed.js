const Product = require('./Product.js')


var items = [
  {
    productId: 2212,
    type: 'electronics',
    name: 'tablet',
    price: 350,
    description: 'some description electronics tablets color black...'
  },

  {
    productId: 4412,
    type: 'toys',
    name: 'roboCop',
    price: 83,
    description: 'red color robot'
  },
  {
    productId: 5569,
    type: 'electronics',
    name: 'T.V',
    price: 400,
    description: '32 inch tv'
  },
  {
    productId: 1100,
    type: 'games',
    name: 'xbox',
    price: 320,
    description: 'xboz 360 with two games'
  },
  {
    productId: 9901,
    type: 'music',
    name: 'speaker',
    price: 50,
    description: 'best quality speaker'
  }
]



Product.bulkCreate(items)