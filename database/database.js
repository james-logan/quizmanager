var mysql = require('mysql')

var secrets = require('../config/secrets.js')

console.log(secrets.sqlPass);
var connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3307',
  user: 'root',
  password: secrets.sqlPass,
  database: 'quizlinks'
});

module.exports = connection;


