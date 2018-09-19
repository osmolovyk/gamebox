const { mongoose } = require('../../config/app.config');

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: {type: String, required: true, min: 4, max: 20},
});

// Virtual for this book instance URL.
GenreSchema
  .virtual('url')
  .get(function () {
    return '/catalog/genre/' + this._id;
  });

const Genre = mongoose.model('Genre', GenreSchema);

module.exports = Genre;
