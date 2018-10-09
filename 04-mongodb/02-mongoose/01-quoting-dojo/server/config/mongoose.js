const mongoose = require('mongoose');

module.exports = function(mongoose) {
    mongoose.connect('mongodb://localhost:27017/qoutes_tb', {useNewUrlParser:true});
    mongoose.connection.on('connected', () => console.log('mongo db connected successfully!'));
}