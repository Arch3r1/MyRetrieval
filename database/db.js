const Sequelize = require('sequelize');
var db = {
  "name": "root",
  //"password": " ",
  "database": "retrieval",
  "host": "localhost",
  "dialect": "mysql"
}
var sequelize = new Sequelize(db.database, db.name, db.password, {
  host: db.host,
  dialect: db.dialect,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});


module.exports = {
  sequelize
};