var express = requiere('express');
var router = rexpress.Router();
var contoller = require('../controllers/travel');

/* GET Travel page. */
router.get('/', Controller.travel);

module.exports = router;