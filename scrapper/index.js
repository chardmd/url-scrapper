const urlParser = require("url");
const got = require("got");

const metascraper = require("metascraper")([
  require("metascraper-author")(),
  require("metascraper-date")(),
  require("metascraper-description")(),
  require("metascraper-image")(),
  require("metascraper-logo")(),
  require("metascraper-clearbit-logo")(),
  require("metascraper-publisher")(),
  require("metascraper-title")(),
  require("metascraper-url")()
]);

/**
 * Get URL metadata
 *
 * @param {String} string
 */

async function scrapUrl(urlText) {
  if (typeof urlText !== "string") {
    return {
      message: "URL is not a string"
    };
  }

  const validUrl = urlParser.parse(urlText, true);
  if (!validUrl) {
    return {
      message: "URL is not valid."
    };
  }

  let metadata = null;
  try {
    const { body: html, url } = await got(urlText);
    metadata = await metascraper({ html, url });
  } catch (e) {
    return {
      message: `Failed scrapping data ${e}`
    };
  }

  return metadata;
}

/**
 * Expose `scrapUrl`.
 */

module.exports = scrapUrl;
