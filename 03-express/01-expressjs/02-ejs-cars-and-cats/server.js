const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname + '/static')));

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

// Have '/cars' show your pictures of cars.
app.get('/cars', function(req,res){
    res.render('cars');
})

// Have '/cats' show your pictures of cats.
app.get('/cats', function(req,res){
    res.render('cats');
})

// Have 'cars/new' show a form to create a new car.
app.get('/cars/new', function(req,res){
    res.render('new');
})

app.listen(port, () => console.log('listening to port :', port))