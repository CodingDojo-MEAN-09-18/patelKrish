const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = function(app) {
    //...GET '/' - index
    app.get('/', function(request,response) { 
        console.log('in the index route');
        response.render('index');
    });

    //...POST '/quotes' - form data for quotes
    app.post('/quotes', function(request,response) { 
        console.log('in the post qoutes route');
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
    });

    //...GET '/quotes' - results
    app.get('/quotes', function(request,response) { 
        console.log('in the quotes route');
        Quote.find({}).then(quotes => response.render('results', { quotes }));
    });
}