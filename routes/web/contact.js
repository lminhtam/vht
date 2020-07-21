var express = require('express');
var controller = require("../../controllers/web/contact.js");
var authentication = require('../../config/authentication');

var router = express.Router();

/* GET contact page. */
router.get('/', authentication.checkLoginStatus, controller.index);

module.exports = router;