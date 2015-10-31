var request = require('request')

request.get('http://127.0.0.1:3000/quiz', function (err, res) {
  if (err) {
    console.log("DANGER WILL ROBINSON!");
  } else {
    console.log(res.statusCode)
    console.log(res.body)
  }
})
