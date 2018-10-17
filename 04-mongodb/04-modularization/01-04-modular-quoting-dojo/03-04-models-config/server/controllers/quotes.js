const Quote = require('mongoose').model('Quote')

module.exports = {
    index(request,response) { 
        console.log('in the index route');
        response.render('index');
    },
    create(request,response) { 
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
    },
    show(request,response) { 
        console.log('in the quotes route');
        Quote.find({}).then(quotes => response.render('results', { quotes }));
    }
}