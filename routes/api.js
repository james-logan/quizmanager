var express = require('express')
var router = express.Router()
var cors = require('cors');

//cors not currently in use, needs to be tested
var corsConfig = require('../config/cors.js')
var controller = require('../controllers/turnIn_controller')
//this will get injected as middleware when po is ready
//cors(corsConfig.post)

router.post('/quiz', controller.turnIn);

router.get('/quiz', controller.retrieveAll)

module.exports = router;
