const Sequelize = require('sequelize');
var sequelize = require('./index.js')


const Product = sequelize.define('product', {
  productId: {
    type: Sequelize.INTEGER, unique: true
  },
  type: {
    type: Sequelize.STRING
  },

  name: Sequelize.STRING,

  price: Sequelize.INTEGER,

  description: Sequelize.TEXT
});

// force: true will drop the table if it already exists
Product.sync()

module.exports = Product