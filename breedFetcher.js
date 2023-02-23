const request = require("request");
const arg = process.argv[2];

request(
  "https://api.thecatapi.com/v1/breeds/search?q=" + arg,
  (error, content, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(body)[0];
    if (!data) {
      // (data === undefined) or any other falsy value works as well
      console.log("The requested breed was not found");
    } else {
      // need to use this to change from String to Object
      console.log(data.description);
    }
  }
);
