// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// add session
var session = require('express-session');
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// use session
app.use(session({ secret: 'keyboardkitteh', resave: false, saveUninitialized: true, cookie: { maxAge: 60000 } }));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) { 
    if(req.session.page_views){ req.session.page_views++; } 
    else { req.session.page_views = 1; }

    // res.send("<h1>Count</h1> <p>" + req.session.page_views + " times.</p>");
    // response.render('users', {users: users_array});
    res.render("index", {ses: req.session.page_views}); 
});
// post route for adding count +2 btm
app.post('/count', function(req, res) {
    req.session.page_views += 1;

    res.redirect('/');
})
// post route for adding count +2 btm
app.post('/reset', function(req, res) {
    req.session.page_views = 0;

    res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
