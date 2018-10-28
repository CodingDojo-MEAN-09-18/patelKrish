const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const reg = new RegExp('\\.js$');
const modelsPath = path.resolve('server/models');

mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true});
mongoose.connection.on('connected', () => console.log('MongoDB Connected!'));

fs.readdirSync(modelsPath).forEach(file => {
  if(reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});
