var express = require('express');
var controller = require("../controllers/forgot-password.js");

var router = express.Router();

/* GET forgot-password page. */
router.get('/', controller.index);

module.exports = router;