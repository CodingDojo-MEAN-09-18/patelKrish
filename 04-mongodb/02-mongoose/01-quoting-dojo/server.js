// require modules
//...express
const express = require('express');
//...body parser
const bodyParser = require('body-parser');
//...path
const path = require('path');
//...mongoose
const mongoose = require('mongoose');

// port
//...declare port number
const port = process.env.PORT || 8000;
// schema
const { Schema } = mongoose;
// intialize express app
const app = express();

// set views
//...set views directory
app.set('views',path.resolve('views'));
//..set views engine
app.set('view engine','ejs');

// set up middle ware
//...initialize body parser
app.use(bodyParser.urlencoded({ extended: true }));

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/qoutes_tb', {useNewUrlParser:true});
// check connection
mongoose.connection.on('connected', () => console.log('mongo db connected successfully!'));

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
const Quote = mongoose.model('Quote', qoutesSchema);

// routes

//...GET '/' - index
app.get('/', function(request,response) {
    console.log('inside the index page');
    
    response.render('index');
})

//...POST '/quotes' - form data for quotes
app.post('/quotes', function(request,response) {
    console.log('inside the quote post');

    Quote.create(request.body)
        .then(quote => {
            console.log('create quote', quote);
            
            response.redirect('/quotes');
        })
        .catch(error => {
            const errors = Object.keys(error.errors)
                .map(key => error.errors[key].message);

            console.log(errors);
            
            response.redirect('/');
        });
})

//...GET '/quotes' - results
app.get('/quotes', function(request,response) {
    console.log('inside the quote page');

    Quote.find({})
        .then(quotes => response.render('results', { quotes }));
})

// listen to port
app.listen(port,() => console.log('listening to port number:', port));