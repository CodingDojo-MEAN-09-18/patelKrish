const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const reg = new RegExp('\\.js$','i');
const modelPath = path.resolve('server/models');

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/qoutes_tb', {useNewUrlParser:true});
// check connection
mongoose.connection.on('connected', () => console.log('mongo db connected successfully!'));

fs.readdirSync(modelPath).forEach(file => {
    if(reg.test(file)) {
        require(path.join(modelPath, file));
    }
});