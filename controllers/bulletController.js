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
router.post('/', (req, res) => {
    // always console.log() req.body before you try to use it to make sure it's what you think it is
    // you may need to manipulate it somehow before doing your add to database
    // it may be ready to go directly into the DB as is, but it may not!!!! CHECK FIRST!!!!
    console.log(req.body);

    const thingToAddToDB = {
        task: req.body.task,
        completed: false
    }
    Bullet.create(thingToAddToDB, (err, createdBullet) => {
        if(err) console.log(err);
        res.send(createdBullet);
    })
})

// show

// edit

// update

// destroy


module.exports = router;