const connection  = require('./index.js');



// C - CREATE
var newItem = {
    productId: 2212,
    type: 'software',
    name: 'windows10',
    price: 150,
    description: 'MS Windows 10 installation CD'
  }

connection.query('INSERT INTO products SET ?', newItem, function(err, results, fields) {
  if (err) throw err;
  console.log(results)
})


// R - READ (FIND)
connection.query('SELECT * FROM products WHERE type LIKE "%onics%" ', function(err, results, fields) {
  if (err) throw err;
  console.log(results)
})




// U - UPDATE
connection.query('UPDATE products SET type = ?, name = ?, price = ? WHERE price < 300', ['newType', 'newName', 44 ], function (error, results, fields) {
  if (error) throw error;
  console.log(results)
});





// D - DELETE
connection.query('DELETE FROM products WHERE name = "windows10" ', function(err, results, fields) {
  if (err) throw err;
  console.log(results)
})







// EXTRA - SORT
connection.query('SELECT * FROM products ORDER BY price', function(err, results, fields) {
  if (err) throw err
  else console.log(results)
})

connection.end()