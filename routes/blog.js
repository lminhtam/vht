var express = require('express');
var controller = require("../controllers/blog.js");

var router = express.Router();

/* GET blog page. */
router.get('/', controller.index);

module.exports = router;