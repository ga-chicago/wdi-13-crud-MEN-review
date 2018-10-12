const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// connect to db -- run the code in this file
require('./db/db');

// MIDDLEWARE -- intercept all requests and do something to them
app.use((req, res, next) => {
    console.log("Hi i am middleware and every route comes through me");
    next();
})
app.use(bodyParser.urlencoded({extended: false}));



// CONTROLLERS
const bulletController = require('./controllers/bulletController')
app.use('/bullets', bulletController)

app.get('/', (req, res) => {
    res.send("welcome to the app! <a href='/bullets/new'>add a bullet</a>")
    // you could:
    // render a home page
    // redirect to home page or some other part of the site or some other site entirely
})




app.listen(3000, () => {
    console.log("app is listening on port 3000.");
})