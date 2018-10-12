const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bulletSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

// create a model from the schema - the first arg will be the collection name
const Bullet = mongoose.model('Bullet', bulletSchema);

module.exports = Bullet;









