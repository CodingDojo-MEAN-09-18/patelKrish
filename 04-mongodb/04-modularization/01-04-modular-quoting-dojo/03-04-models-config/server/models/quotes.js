//...mongoose
const mongoose = require('mongoose');
// schema
const { Schema } = mongoose;

// create schema for quotes table
const qoutesSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Must enter your name!'],
        trim: true,
        minlength: [2, 'Name is too short!']
    },
    quote: {
        type: String,
        required: [true, 'Must enter quote!'],
        trim: true,
        minlength: [2, 'Quote is too short!']
    }
}, {timestamps: true});

// set the schema for db
module.exports = mongoose.model('Quote', qoutesSchema);