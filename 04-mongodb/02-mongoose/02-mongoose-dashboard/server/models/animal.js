const mongoose = require('mongoose');

const { Schema } = mongoose;

require('../config/mongoose.js')(mongoose)

const animalSchema = new Schema({
    name: {
        type:String,
        required:[true, 'Provide a name for your animal'],
        trim: true,
    },
    age: {
        type: Number,
        trim: true,
        required: [true, 'Provide an age']
    },
    numLegs: {
        type: Number,
        trim: true,
        min: [0,'More legs than that.....'],
        required: [true, 'Provide number of legs for your animal']
    },
    eatsPeople: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

// set the schema for db
const Animal = mongoose.model('Animal', animalSchema);


module.exports = Animal;