const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = function(app) {
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
}