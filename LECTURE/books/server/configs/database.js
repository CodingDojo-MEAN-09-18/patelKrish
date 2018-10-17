const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const modelPath = path.resolve('server/models');

mongoose.connect('mongodb://localhost:27017/books',{useNewUrlParser:true});

mongoose.connection.on('connected', () => console.log('connected to mongodb'))

fs.readdirSync(modelPath).forEach(file => {
  if (file.indexOf('.js')) {

  }
})
