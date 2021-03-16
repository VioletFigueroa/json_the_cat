const request = require("request");
const fetchBreedDescription = (breedName, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (err, res, body) => {
    if (err) callback(err, null);
    else if (JSON.parse(body)[0]) {
      const data = JSON.parse(body)[0];
      callback(null, data["description"]);
    }  else callback(err, null);
  });
};
module.exports = { fetchBreedDescription };