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
app.use(express.static( __dirname + '/public/dist/public' ));

// set middle ware
app.use(bodyParser.json());

// set up database
// ...connect to mongo db
mongoose.connect('mongodb://localhost:27017/book_api', {useNewUrlParser:true});
// ...check connection
mongoose.connection.on('connected', () => console.log('mongo db connected successfully!'));

// ...create schema
const authorSchema = new Schema({
    // Each author has a first name and a last name, which must each be at least two characters long
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    // Each author has a country of origin, which must be at least three characters long
    country: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    // Each author has a birthdate, which must be in the past
    birthDate: {
        type: Date,
        required: true
    },
    // Each author can write many books
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
},{ timestamps: true });

const bookSchema = new Schema({
    // Each book has a title, which must be at least two characters long
    title: {
        type: String,
        minlength: 2,
        trim: true,
        required: true
    },
    // Each book has a publication year, which must be in the past
    year: {
        type: Date,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }
}, { timestamps: true })

// ...set schema for db
const Author = mongoose.model('Author', authorSchema);
const Book = mongoose.model('Book', bookSchema);

// routes

// Retrieve all authors
app.get('/authors', function(request,response){
    Author.find({})
        .populate('books')
        .then(author => response.json(author))
        .catch(error => response.json(error))
})

// Retrieve an author by ID and all the books written by that author
app.get('/authors/:id', function(request,response){
    Author.find({_id: request.params.id})
        .populate('books')
        .then(author => response.json(author))
        .catch(error => response.json(error))
})

// Create an author
app.post('/authors', function(request,response){
    Author.create(request.body)
        .then(author => response.json(author))
        .catch(error => response.json(error))
})

// Create a book written by an author already in the database
app.get('/books',function(request,response){
    Book.find({})
        .populate('author')
        .then(book => response.json(book))
        .catch(error => response.json(error))
})

app.post('/books',function(request,response){
    Book.create(request.body)
        .then(book=>{
            return Author.updateOne({_id: book.author._id},{$push: {books: book._id}})
                .then(() => response.json(book))
                .catch(error => response.json(error))
        })
        .catch(error => response.json(error))
})

// Update an author by ID
app.put('/authors/:id', function(request,response){
    Author.updateOne({_id: request.params.id}, request.body)
        .then(author => response.json(author))
        .catch(error => response.json(error))
})

// Delete a book by ID
app.delete('/books/:id', function(request,response){
    Book.deleteOne({_id: request.params.id})
        .then(() => console.log('deleted'))
        .catch(error => response.json(error))
})

// Delete an author by ID
app.delete('/authors/:id', function(request,response){
    Author.deleteOne({_id: request.params.id})
        .then(() => console.log('deleted'))
        .catch(error => response.json(error))
})

// port
app.listen(port, () => console.log('listening to port number:', port));
