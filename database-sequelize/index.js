const Sequelize = require('sequelize');

const sequelize = new Sequelize('inventory', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});


module.exports = sequelize;