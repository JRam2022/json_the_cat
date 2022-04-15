`use strict`;
const { fetchBreedDescription } = require('./breedFetcher');

const argv = process.argv[2];

const breedName = argv;

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    return ('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});