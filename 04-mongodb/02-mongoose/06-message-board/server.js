// require modules
//...express
const express = require('express');
//...body parser
const bodyParser = require('body-parser');
//...path
const path = require('path');
//...mongoose
const mongoose = require('mongoose');

// port
//...declare port number
const port = process.env.PORT || 8000;
// schema
const { Schema } = mongoose;
// intialize express app
const app = express();

// set views
//...set views directory
app.set('views',path.resolve('views'));
//..set views engine
app.set('view engine','ejs');

// set up middle ware
//...initialize body parser
app.use(bodyParser.urlencoded({ extended: true }));

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/message_board_db', {useNewUrlParser:true});
// check connection
mongoose.connection.on('connected', () => console.log('mongo db connected successfully!'));

// create schema for quotes table
const messageSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    message: {
        type: String,
        trim: true,
        required: true
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
}, {timestamps: true});

const commentSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    comment: {
        type: String,
        trim: true,
        required: true
    },
    message: {
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }
}, {timestamps: true});

// set the schema for db
const Message = mongoose.model('Message', messageSchema);
const Comments = mongoose.model('Comments', commentSchema);

// routes

// GET "/" - index page
app.get('/', function(req,res){
    console.log('in the index route');

    Message.find({})
        .populate('comments')
        .then(msg => res.render('index', { msg }))
})

// POST "/message" 
app.post('/message', function(req,res){
    console.log('in the message post route');

    Message.create(req.body)
        .then(msg => {
            console.log('Animal created: ', msg);
            
            res.redirect('/');
        })
        .catch(error => {
            const errors = Object.keys(error.errors)
                .map(key => error.errors[key].message)

            console.log(errors);
            
            res.redirect('/');
        });
})

// POST "/comment" 
app.post('/comment/:id', function(req,res){
    console.log('in the comment post route');

    const id = req.params.id;

    console.log(id);
    

    Comments.create(req.body)
        .then(comments => {
            console.log('Create Comment', comments);

            return Message.findById(id)
                .then(msg => {

                    
                    // msg.comment.push(comments);
                    // console.log(msg);
                    
                    // console.log('save');

                    // // msg.save();
                    // msg.save();
                    // res.redirect('/');
                })
                .then(() => res.redirect('/'))
        })                
        .catch(error => {
            const errors = Object.keys(error.errors)
                .map(key => error.errors[key].message)
            
            console.log(errors);

            res.redirect('/')
        });
})

// listen to port
app.listen(port,() => console.log('listening to port number:', port));