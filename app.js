var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var api = require('./routes/api');

//grabs my mysql set up module
var database = require('./database/database');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static("public"));

app.use(api)

app.set('port', 3000)

//actually connects to the mysql database, and if that is successful it starts listening
database.connect(function (err) {
  if (err) {
    console.log('error connection:' + err.stack)
  } else {
    app.listen(app.get('port'))
    console.log('app listening on' + app.get('port'))
  }
})

// app.use('/api', api);

