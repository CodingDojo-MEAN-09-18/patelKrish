var express = require('express');
var path = require('path');
var session = require('express-session');

var app = express();

var bodyParser = require('body-parser');

app
.use(bodyParser.urlencoded({extended:true}))
.use(express.static(path.join(__dirname, "./static")))
.use(session({secret:'keyboardkiteh',resave:false,saveUninitialized:true,cookie:{maxAge:60000}}));

app.set('views', path.join(__dirname,'./views'));
app.set('view engine','ejs');

// root route --> index.ejs view
app.get('/',function(req,res){
    // code here

    res.render('index');
})

// result route --> result.ejs view
app.get('/result', function(req,res){
    // code here
    name = req.session.name;
    location = req.session.location;
    language = req.session.language;
    comment = req.session.comment;

    context = {
        'name': name,
        'location': location,
        'language': language,
        'comment': comment
    }

    res.render('result', context);
})

// post route --> survey form
app.post('/survey',function(req,res){
    // code here
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;

    if(req.body.comment != null) { req.session.comment = req.body.comment; }
    else { req.session.comment = null; }

    res.redirect('/result');
})

// listen to port 8000
app.listen(8000, function() {
    console.log('listening on port 8000');
})