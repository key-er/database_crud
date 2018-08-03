const connection = require('./index.js')


connection.connect();

connection.query('USE inventory')
connection.query('CREATE TABLE products ( productId INT, type VARCHAR(50), name VARCHAR(100), price INT, description TEXT)')


connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});


