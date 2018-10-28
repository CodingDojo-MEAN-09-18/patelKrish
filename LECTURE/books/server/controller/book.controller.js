const Book = require('mongoose').model('Book');

module.exports = {
  // get all
  index(request,response) {
    Book.find({})
      .then(books => response.json(books))
      .catch(errors => console.log(errors))
  },
  // get by id
  show(request,response) {
    Book.findById(request.params.book_id)
      .then(book => response.json(book))
      .catch(errors => console.log(errors))
  },
  // create
  create(request,response) {
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        response.status(402).json(errors);
      })
  },
  // update
  update(request,response) {
    Book.findByIdAndUpdate(request.params.book_id, request.body)
      .then(book => response.json(book))
      .catch(errors => console.log(errors))
  },
  // delete
  destroy(request,response) {
      Book.findByIdAndRemove(request.params.book_id)
        .then(book => response.json(book))
        .catch(errors => console.log(errors))
  }
};
