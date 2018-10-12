// our controller needs this model to talk to db
const Bullet = require('../models/bullet.js')
const express = require('express');
const router = express.Router();

// index

// new
router.get('/new', (req, res) => {
    res.render('new.ejs');
})

// create

// show

// edit

// update

// destroy


module.exports = router;