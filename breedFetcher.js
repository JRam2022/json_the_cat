const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    const data = JSON.parse(body);
    // returns error if undefined or invalid breed
    if (data[0] === undefined) {
      let error = "Must be a valid URL and cat breed";
      return callback(error, null);
    }
    
    //prints cat breed description
    let desc = data[0]['description'];
    callback(null, desc);
    
  });
};

module.exports = { fetchBreedDescription };