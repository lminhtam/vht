var express = require('express');
var controller = require("../controllers/contact.js");

var router = express.Router();

/* GET contact page. */
router.get('/', controller.index);

module.exports = router;