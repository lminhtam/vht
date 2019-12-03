var express = require('express');
var controller = require("../controllers/elements.js");

var router = express.Router();

/* GET elements page. */
router.get('/', controller.index);

module.exports = router;