// Property ID Range: 30506101-30506200
const faker = require('faker');
const db = require('./index.js');

const roomTypes = ['Living Room', 'Full kitchen', 'Full bathroom', 'Entry', 'Bedroom Area', 'Exterior', 'Patio', 'Dining room']

const propertyListingGenerator = () => {
  const listings = [];

  for (let id = 30506101; id < 30506200; id += 1) {
    const photos = photoListGenerator();
    const propertyListing = {
      listingId: id,
      photos,
    };
    listings.push(propertyListing);
  }

  return listings;
};

const photoListGenerator = () => {
  const totalPhotos = 0; // TODO Create random number gen b/w 5-??
  const photos = [];
  for (let photoId = 1; photoId < totalPhotos; photoId += 1) {
    photoGenerator(photoId);
  }

  return photos;
};

const photoGenerator = (photoId) => {

  const photo = {
    id: photoId,
    url: faker.image.city(),
    description: faker.lorem.sentence(),
    room: '', // TODO Create a means to select a random room
  };

};

let sampleListings = propertyListingGenerator();
console.log(sampleListings);
// const insertSampleListings = () => {
//   db.create(sampleListings)
//     .then(() => db.disconnect());
// };

// insertSampleListings();
