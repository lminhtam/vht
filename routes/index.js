var express = require('express');
var controller = require("../controllers/index");
var ensureAuthenticated = require('../config/authentication').ensureAuthenticated;

var router = express.Router();

/* GET home page. */
router.get('/', ensureAuthenticated, controller.index);

module.exports = router;