var assert = require("assert");
const scrapper = require("../scrapper");

describe("Scrapper test", function() {
  it("should return image value", function() {
    scrapper("https://github.com").then(result => {
      assert.equal(
        result.image,
        "https://assets-cdn.github.com/images/modules/open_graph/github-logo.png"
      );
    });
  });
});
