const mongoose = require('mongoose');

// the end of the connection string is your db name
// mongo will create it for you automatically if it doesn't exist WHEN SOMETHING IS ADDED
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true })

mongoose.connection.on('connected', () => {
  console.log('connected');
})

mongoose.connection.on('disconnected', () => {
  console.log('disconnected');
})
mongoose.connection.on('error', (error) => {
  console.log(error);
})