const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Provide a title'],
    trim: true,
    minlength: [3, 'Provide atleast 3 characters']
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  pages: {
    type: Number,
    min: 1,
    required: true
  },
  year: {
    type: Number
  },
  publisher: {
    type: String
  }
},{ timestamps:true });

module.exports = mongoose.model('Book', BookSchema);
