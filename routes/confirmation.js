var express = require('express');
var controller = require("../controllers/confirmation.js");

var router = express.Router();

/* GET confirmation page. */
router.get('/', controller.index);

module.exports = router;