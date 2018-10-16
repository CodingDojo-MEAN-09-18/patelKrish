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
app.set('views',path.resolve('client/views'));
//..set views engine
app.set('view engine','ejs');

// set up middle ware
//...initialize body parser
app.use(bodyParser.urlencoded({ extended: true }));

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/mongoose_dashboard', {useNewUrlParser:true});
// check connection
mongoose.connection.on('connected', () => console.log('mongo db connected successfully!'));

// create schema for quotes table
const animalSchema = new Schema({
    name: {
        type:String,
        required:[true, 'Provide a name for your animal'],
        trim: true,
    },
    age: {
        type: Number,
        trim: true,
        required: [true, 'Provide an age']
    },
    numLegs: {
        type: Number,
        trim: true,
        min: [0,'More legs than that.....'],
        required: [true, 'Provide number of legs for your animal']
    },
    eatsPeople: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

// set the schema for db
const Animal = mongoose.model('Animal', animalSchema);

// routes

// GET '/' Displays all of the mongooses.
//...template: index
app.get('/', function(request, response){
    console.log('index route');

    // Get all animal information
    Animal.find({}).then(animals => response.render('index', { animals }));
})

// GET '/animal/info/:id' Displays information about one mongoose.
//...template: info
app.get('/animal/info/:id', function(request, response){
    console.log('info route');
    
    let id = request.params.id
    console.log(id);
    
    // find animal by id
    Animal.findById(id)
        .then(animal => {
            console.log('animal found: ', animal);
            
            response.render('info', {animal});
        })
        .catch(error => {
            console.log('no animal found!');
            
            response.redirect('/')
        });
})

// GET '/mongooses/new' Displays a form for making a new mongoose.
//...template:  new
app.get('/animal/new', function(request, response){
    console.log('new route');
    
    response.render('newanimal');
})

// POST '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new').
app.post('/animal', function(request,response){
    console.log('create new animal POST!');
    
    Animal.create(request.body)
        .then(animal => {
            console.log('Animal created: ', animal);
            
            response.redirect('/');
        })
        .catch(error => {
            const errors = Object.keys(error.errors)
                .map(key => error.errors[key].message)

            console.log(errors);
            
            response.redirect('/animal/new');
        });
})

// GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.
//...template: edit
app.get('/animal/edit/:id', function(request, response){
    console.log('edit route');

    const id = request.params.id;
    console.log(id);
    
    // find animal by id
    Animal.findById(id)
        .then(animal => {
            console.log('animal found: ', animal);
            
            response.render('edit', {animal});
        })
        .catch(error => {
            console.log('no animal found!');
            
            response.redirect('/')
        });
})

// POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
app.post('/animal/:id', function(request,response){
    console.log('edit animal POST!');

    const id = request.params.id;
    console.log(id);
    
    Animal.update({_id: id}, request.body)
        .then(animal => response.redirect('/'))
        .catch(console.log)
})

// POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.
app.post('/animal/:id/destroy', function(request,response){
    console.log('delete animal POST!');

    const id = request.params.id;
    console.log(id);
    
    Animal.remove({_id: id},function(err,animal){
        if(err)
        {
            console.log(err);
        }

        response.redirect('/');
    });
})

// listen to port
app.listen(port,() => console.log('listening to port number:', port));