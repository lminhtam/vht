var express = require('express');
var controller = require("../controllers/cart.js");

var router = express.Router();

/* GET cart page. */
router.get('/', controller.index);

module.exports = router;