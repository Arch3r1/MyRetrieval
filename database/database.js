const Sequelize = require('sequelize');
var testdb = {
    "username": "root",
     /*"password": "123456",
    "database": "rks",
    "host": "localhost",*/
   //"password": "root",
    "database": "rks20180328",
    "host": "localhost",
    "dialect": "mysql"
}

var db = new Sequelize(testdb.database, testdb.username, testdb.password, {
  
  host: testdb.host,
  dialect: testdb.dialect,
  pool: {max: 5,min: 0,idle: 10000},

});

module.exports = {
  db
};