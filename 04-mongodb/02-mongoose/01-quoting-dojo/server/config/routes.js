const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

const quotes = require('../controllers/quotes.js')

module.exports = function(app) {
    //...GET '/' - index
    app.get('/', function(request,response) { quotes.index(request,response); })

    //...POST '/quotes' - form data for quotes
    app.post('/quotes', function(request,response) { quotes.create(request,response); })

    //...GET '/quotes' - results
    app.get('/quotes', function(request,response) { quotes.quote_all(request,response); })
}