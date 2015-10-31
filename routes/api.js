var express = require('express')
var router = express.Router()
var cors = require('cors');
var corsConfig = require('config/cors.js')
var controller = require('controllers/turnIn_controller')

router.post('/quiz', cors(corsConfig.post), controller.turnIn)
