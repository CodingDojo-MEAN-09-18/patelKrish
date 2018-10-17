const quotes = require('../controllers/quotes.js');


module.exports = function(app) {
    //...GET '/' - index
    app.get('/', quotes.index);

    //...POST '/quotes' - form data for quotes
    app.post('/quotes', quotes.create);

    //...GET '/quotes' - results
    app.get('/quotes', quotes.show);
}