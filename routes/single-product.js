var express = require('express');
var controller = require("../controllers/single-product.js");

var router = express.Router();

/* GET single-product page. */
router.get('/', controller.index);

module.exports = router;