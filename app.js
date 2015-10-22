var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var api = require('./routes/api')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static("public"));

app.set('port', 3000)
app.listen(app.get('port'))
// app.use('/api', api);

