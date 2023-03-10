const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (next) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());
      next();
    });
  });
  it("returns an error when an invalid/non-existent breed is passed in", (next) => {
    fetchBreedDescription("hello", (err, desc) => {
      assert.equal(err, "The requested breed was not found");
      const expectedDesc = null;
      assert.equal(expectedDesc, desc);
      next();
    });
  });
});
