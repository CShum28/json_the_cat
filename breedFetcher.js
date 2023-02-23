const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    "https://api.thecatapi.com/v1/breeds/search?q=" + breedName,
    (error, content, body) => {
      if (error) {
        callback(error, null);
        return;
      }
      const data = JSON.parse(body)[0];
      if (!data) {
        // (data === undefined) or any other falsy value works as well
        callback("The requested breed was not found", null);
      } else {
        // need to use this to change from String to Object
        callback(null, data.description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
