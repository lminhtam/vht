var express = require('express');
var controller = require("../controllers/dashboard.js");

var router = express.Router();

/* GET logout page. */
router.get('/', controller.index);

module.exports = router;