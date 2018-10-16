const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

module.exports = {
    index: function(request, response){ Animal.find({}).then(animals => response.render('index', { animals })); },
    get_info: function(request, response){ Animal.findById(request.params.id).then(animal => { response.render('info', {animal}); }).catch(error => { response.redirect('/') }); },
    new: function(request, response){ response.render('newanimal'); },
    create: function(request,response){
        Animal.create(request.body)
            .then(animal => { response.redirect('/'); })
            .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.errors[key].message);
                response.redirect('/animal/new'); 
            });
    },
    edit: function(request, response){ Animal.findById(request.params.id).then(animal => { response.render('edit', {animal}); }).catch(error => { response.redirect('/'); }); },
    update: function(request,response){ Animal.update({_id: request.params.id}, request.body).then(animal => response.redirect('/')).catch(console.log) },
    delete: function(request,response){
        Animal.remove({_id: request.params.id},function(err,animal){
            if(err) { console.log(err); }

            response.redirect('/');
        });
    }
}