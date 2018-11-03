const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;
const { Schema } = mongoose;

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/final_review', {useNewUrlParser:true});
mongoose.connection.on('connected', () => console.log('mongo db connected successfully!'));

const NoteSchema = new Schema ({
  note: {
    type: String,
    required: true,
    minlength: 3
  }
}, {timestamps: true});

const Note = mongoose.model('Notes', NoteSchema);

const base_url = '/notes'

// get all notes
app.get(this.base_url, function(request, response){
  Note.find({})
    .then(notes => response.json(notes))
    .catch(err => response.json(err))
})

// create note

app.listen(port, () => console.log(`port listening to ${port}`));
