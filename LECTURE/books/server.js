const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json)
app.use(express.static(path.join(__dirname+'books')))

app.listen(port,() => console.log('listening to port :',port))
