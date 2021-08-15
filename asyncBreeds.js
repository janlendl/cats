const fs = require('fs');

const breedDetailsFormFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log('In readFile\'s Callback: it has the data.');
    // CHANGE: Pass data into callback instead of returning it directly
    if (!error) callback(data);
  });
};
  // CHANGE 1: Moved the console.log into a new function:
const printCatBreed = breed => {
  console.log('Return Value: ', breed); // print out details correctly  
};
// CHANGE 2: we're now processing two arguments into breedDetailsFormFile: breed string and a callback function
breedDetailsFormFile('Bombay', printCatBreed);