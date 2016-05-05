var express = require('express');
var router = require('express').Router();
var path = require('path');

router.use(express.static(__dirname + '/../assets'));

router.get('/about', function (req, res) {
    res.sendFile('about.html', { root: path.join(__dirname, '../views') });
});

module.exports = router;
