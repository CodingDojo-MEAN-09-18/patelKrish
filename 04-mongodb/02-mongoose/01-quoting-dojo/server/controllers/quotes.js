const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = {
    index: function(request,response) {
        response.render('index');
    },
    create: function(request,response) {
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
    },
    quote_all: function(request,response) {
        Quote.find({}).then(quotes => response.render('results', { quotes }));
    },
}