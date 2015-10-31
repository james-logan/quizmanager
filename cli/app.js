var request = require('request');
var config = require('./config');

var body = {
    username: config.username
    };

    console.log(JSON.stringify(body))

request.get({
  url: 'http://127.0.0.1:3000/quiz',
  json: body
  }, function (err, res) {
    if (err) {
      console.log("DANGER WILL ROBINSON!");
    } else {
      console.log(res.statusCode)
      console.log(res.body)
    }
})
