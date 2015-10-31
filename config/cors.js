var secrets = require('./secrets.js')


var options = {
  post: {
    origin: secrets.postWhiteList
  }
}


module.exports = options
