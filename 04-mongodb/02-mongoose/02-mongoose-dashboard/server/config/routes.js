const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

const animal = require('../controllers/animal.js')

module.exports = function(app) {
    // GET '/' Displays all of the mongooses.
    //...template: index
    app.get('/', function(request, response){ animal.index(request,response); })

    // GET '/animal/info/:id' Displays information about one mongoose.
    //...template: info
    app.get('/animal/info/:id', function(request, response){ animal.get_info(request,response); })

    // GET '/mongooses/new' Displays a form for making a new mongoose.
    //...template:  new
    app.get('/animal/new', function(request, response){ animal.new(request,response); })

    // POST '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new').
    app.post('/animal', function(request,response){ animal.create(request,response); })

    // GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.
    //...template: edit
    app.get('/animal/edit/:id', function(request, response){ animal.edit(request,request); })

    // POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
    app.post('/animal/:id', function(request,response){ animal.update(request,response); })

    // POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.
    app.post('/animal/:id/destroy', function(request,response){ animal.delete(request,response); })
}