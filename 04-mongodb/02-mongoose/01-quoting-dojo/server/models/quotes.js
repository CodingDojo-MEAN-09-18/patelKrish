const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/qoutes_tb', {useNewUrlParser:true});
mongoose.connection.on('connected', () => console.log('mongo db connected successfully!'));

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

const Quote = mongoose.model('Quote', qoutesSchema);

module.exports = Quote;