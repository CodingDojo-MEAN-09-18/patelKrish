// require modules
//...express
const express = require('express');
//...body parser
const bodyParser = require('body-parser');
//...path
const path = require('path');

// port
//...declare port number
const port = process.env.PORT || 8000;

// intialize express app
const app = express();

require('./server/config/database');

// set views
//...set views directory
app.set('views',path.resolve('client/views'));
//..set views engine
app.set('view engine','ejs');

// set up middle ware
//...initialize body parser
app.use(bodyParser.urlencoded({ extended: true }));

// routes
require('./server/config/routes.js')(app);

// listen to port
app.listen(port,() => console.log('listening to port number:', port));