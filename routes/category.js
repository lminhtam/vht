var express = require('express');
var controller = require("../controllers/category.js");

var router = express.Router();

/* GET category page. */
router.get('/', controller.index);

module.exports = router;