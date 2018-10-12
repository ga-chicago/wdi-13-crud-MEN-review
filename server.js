const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("welcome to the app!")
    // you could:
    // render a home page
    // redirect to home page or some other part of the site or some other site entirely
})


app.listen(3000, () => {
    console.log("app is listening on port 3000.");
})