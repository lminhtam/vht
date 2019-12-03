var express = require('express');
var controller = require("../controllers/registration.js");
var forwardAuthenticated = require('../config/authentication').forwardAuthenticated;

var router = express.Router();

/* GET registration page. */
router.get('/', forwardAuthenticated, controller.index);

/* POST registration page. */
router.post('/', controller.indexPost);

module.exports = router;