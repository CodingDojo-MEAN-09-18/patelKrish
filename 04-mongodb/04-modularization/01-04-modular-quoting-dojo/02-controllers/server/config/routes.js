const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

const quotes = require('../controllers/quotes.js')

module.exports = function(app) {
    //...GET '/' - index
    app.get('/', quotes.index(req,res));

    //...POST '/quotes' - form data for quotes
    app.post('/quotes', quotes.create(req,res));

    //...GET '/quotes' - results
    app.get('/quotes', quotes.show(req,res));
}