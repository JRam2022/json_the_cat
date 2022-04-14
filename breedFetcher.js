`use strict`;

const argv = process.argv.slice(2);

const request = require('request');
//stores URL because it should never change
const searchURL = 'https://api.thecatapi.com/v1/breeds/search?q=';
//Keeps URL and Cat breed search
const catBreed = searchURL + argv[0];


request(catBreed, (error, response, body) => {
  const data = JSON.parse(body);
  //if errors returns error
  if (error) {
    console.log(JSON.stringify(error));
    return;
  }
  //if not a vaild url or cat breed logs message
  if (data[0] === undefined) {
    console.log("Must be a valid URL and cat breed");
    return;
  }
  //prints cat breed description
  console.log(data[0]['description']);
  
});
