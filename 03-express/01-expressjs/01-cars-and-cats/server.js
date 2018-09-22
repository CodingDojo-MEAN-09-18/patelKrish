var express = require('express'); // load express module
console.log('Express is loaded!');

// invoke express
var app = express();
console.log('Express is invoked!');

app.use(express.static(__dirname + "/static"));

app.listen(8000, function () { console.log("listening on port 8000"); })