var express = require('express');
var controller = require("../controllers/tracking.js");

var router = express.Router();

/* GET tracking page. */
router.get('/', controller.index);

module.exports = router;