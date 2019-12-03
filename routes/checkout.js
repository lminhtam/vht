var express = require('express');
var controller = require("../controllers/checkout.js");

var router = express.Router();

/* GET checkout page. */
router.get('/', controller.index);

module.exports = router;