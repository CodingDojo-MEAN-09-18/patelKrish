// modules
// ...express
const express = require('express');
// ...body parser
const bodyParser = require('body-parser');
// ...path
const path = require('path');
// ...mongo db
const mongoose = require('mongoose');

// port
// ...port number
const port = process.env.PORT || 8000;
// ...schema
const { Schema } = mongoose;

// initialize app
const app = express();

// set views

// set middle ware
app.use(bodyParser.json());

// set up database
// ...connect to mongo db
mongoose.connect('mongodb://localhost:27017/1995_users', {useNewUrlParser:true});
// ...check connection
mongoose.connection.on('connected', () => console.log('mongo db connected successfully!'));

// ...create schema
const usersSchema = new Schema({
    name: String
},{ timestamps:true });

// ...set schema for db
const Users = mongoose.model('Users', usersSchema);

// routes

// GET '/' will serve up the full collection of people born in 1955
app.get('/', function(req, res){
    Users.find({}, function(err, user){
        if(err) {
            console.log('Returned error', err);
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data: user})
        }
    })
})

// GET '/new/:name/' will add a name into the database which can be used for blank spaces. 
// So adding Steve Jobs to our database, you'd type in the URL 'localhost:8000/new/Steve Jobs'
app.get('/new/:name', function(req,res){
    let userInstance = new Users();
    userInstance.name = req.params.name;
    userInstance.save(function(err){
        if(err) {
            console.log('Returned error', err);
            res.json({message: "Error", error: err})
        }
        else {
            console.log('Added user:', req.params.name,'successfully!!')
            res.redirect('/')
        }
    })
})

// GET '/remove/:name/' will delete a name from the database.
app.get('/remove/:name', function(req,res){
    Users.deleteOne({name: req.params.name}, function(err){
        if(err) {
            console.log('Returned error', err);
            res.json({message: "Error", error: err})
        }
        else {
            console.log('Deleted user:', req.params.name,'successfully!!')
            res.redirect('/')
        }
    })
})

// GET '/:name' will bring up the document of that particular person.
app.get('/:name',function(req,res){
    Users.findOne({name: req.params.name}, function(err, user){
        if(err) {
            console.log('Returned error', err);
            res.json({message: "Error", error: err})
        }
        else {
            console.log('Found user:', req.params.name,'successfully!!')
            res.json({message: "Success", data: user})
        }
    })
})

// port
app.listen(port, () => console.log('listening to port number:', port));