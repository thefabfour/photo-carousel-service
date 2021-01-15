const { Schema, model, connect } = require('mongoose');

connect('mongodb://localhost/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to MongoDB!'))
  .catch(err => console.log('Error connecting to the database.', err));

const photoSchema = new Schema({
  listingId: {
    type: Number,
    required: true,
  },
  photos: [
    {
      id: {
        type: Number,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      room: {
        type: String,
        default: 'Living area',
        required: true,
      },
    },
  ],
});

const PhotoListing = model('Kitten', photoSchema);

//TODO: ADD

module.exports = {

};
