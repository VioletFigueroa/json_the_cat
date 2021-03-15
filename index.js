const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];
fetchBreedDescription(breedName, (error, desc) => {
  error ? console.log('Error fetch details:', error)
    : console.log(desc);
});