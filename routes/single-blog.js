var express = require('express');
var controller = require("../controllers/single-blog.js");

var router = express.Router();

/* GET single-blog page. */
router.get('/', controller.index);

module.exports = router;