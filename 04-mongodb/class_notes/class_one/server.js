const mongoose = require('mongoose');

// looks for key (schema) on the mongoose object
// ...same as --> const Schema = mongoose.Schema;
const { Schema } = mongoose; 

// connect to mongo db
mongoose.connect('mongodb://localhost:27017/animals',{useNewUrlParser:true});

// check connection
mongoose.connection.on('connected', () => console.log('MONGO DB CONNECTED'));

// create model (schema)
const animalSchema = new Schema({
    name: {
        type:String,
        required:[true, 'Provide a name for your animal'],
        trim: true,
    },
    age: Number,
    numLegs: {
        type: Number,
        min: [0,'More legs than that.....'],
        required: [true, 'Provide number of legs for your animal']
    },
    eatsPeople: {
        type: Boolean,
        default: false
    }
},{timestamps:true});

// create collection
const Animal = mongoose.model('Animal', animalSchema);

// retrive the information of the Animal model
//...if it is in different file
// const Animal = mongoose.model('Animal');

// create an animal object
const animal = new Animal({
    name: 'Fox',
    age: 1,
    numLegs: 4,
})

// save to the db using promise
animal.save()
    .then(function(saved){console.log(saved);})
    .catch(function(error){
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);

        console.log(errors);
        
        // to send errors to template
        // response.render('some_doc',{errors})
    });
