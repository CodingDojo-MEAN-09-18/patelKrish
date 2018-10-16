const mongoose = require('mongoose');

module.exports = function(mongoose) {
    // connect to mongodb
    mongoose.connect('mongodb://localhost:27017/mongoose_dashboard', {useNewUrlParser:true});
    // check connection
    mongoose.connection.on('connected', () => console.log('mongo db connected successfully!'));
}