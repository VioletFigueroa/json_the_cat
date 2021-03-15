const request = require("request");

request('https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2], (err, res, body) => {
  const data = JSON.parse(body);
  if (data[0] === undefined) console.log('error:', err); // Print the error if one occurred
  else {
    console.log(data[0].description);
  }
});