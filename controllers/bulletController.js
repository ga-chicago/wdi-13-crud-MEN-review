// our controller needs this model to talk to db
const Bullet = require('../models/bullet.js')
const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.send("you have a working bullet controller")
})

module.exports = router;