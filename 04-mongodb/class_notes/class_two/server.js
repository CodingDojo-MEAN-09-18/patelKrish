const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;
const { Schema } = mongoose;
const app = express();

// set views
app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

// middle ware
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/author_books', {useNewUrlParser:true});
mongoose.connection.on('connected', () => console.log('MONGO DB CONNECTED'));

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    isAlive: {
        type: Boolean,
        default: true
    },
    books: [
        {
            type: Schema.Types.ObjectId,    // just the id of the books
            ref: 'Book'                     // references book table
        }
    ]
});

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    pages: {
        type: Number,
        required: true,
        trim: true,
        min: 1
    },
    year: Number
});

const Author = mongoose.model('Author', authorSchema);
const Book = mongoose.model('Book', bookSchema);

app.get('/',function(_request,response){
    response.render('index');
})

app.get('/authors', function(_request,response){
    Author.find({})
        .populate('books')
        .then(authors => response.render('authors/index', { authors }))
        .catch(console.log);
})

app.get('/authors/new', function(_request,response){
    response.render('authors/new')
})

app.post('/authors', function(request,response){
    Author.create(request.body)
        .then(author => {
            console.log('created author ', author)
            response.redirect('/authors');
        })
        .catch(error => {
            const errors = Object.keys(error.errors)
            .map(key => error.errors[key].message)

            response.render('authors/new', { errors });
        });
})

app.get('/books', function(_request,response){
    Book.find({})
        .populate('author')
        .then(books => response.render('books/index', { books }))
        .catch(console.log);
})

app.get('/books/new', function(request,response){
    Author.find({})
        .then(authors => response.render('books/new',{authors}))
})

app.post('/books',function(request,response){
    Book.create(request.body)
        .then(book => {
            console.log('Create Books ',book);

            return Author.findById(book.author)
                .then(author => {
                    author.books.push(book);
                    
                    return author.save();
                })
                .then(() => response.redirect('/books'))
        })
        .catch(error => {
            const errors = Object.keys(error.errors)
            .map(key => error.errors[key].message)

            response.render('books/new', { errors });
        });
})


// listen to port
app.listen(port, () => console.log('LISTENING ON PORT ',port));