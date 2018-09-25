const express = require('express');
const path = require('path');
const session = require('express-session');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

app
.use(bodyParser.urlencoded({extended:true}))
.use(express.static(path.join(__dirname, './static')))
.use(session({secret:'secert',resave:false,saveUninitialized:true,cookie:{maxAge:60000}}));

app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

// root route --> index.ejs view
app.get('/',function(req,res){
    //...code here

    res.render('index');
})

// get api
app.get('/people', function(req,res){
    axios.get('http://swapi.co/api/people')
    .then(data => {
        // console.log(data);

        res.json(data);
    }).catch(err => {
        // console.log(err);

        res.json(err);
    });
})

// listen to port 8000
app.listen(8000,function() { console.log('listening on port 8000'); })