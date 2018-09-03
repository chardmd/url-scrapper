# url-scrapper

A node.js module that extracts the metadata of a URL

### Install

```
npm install url-scrapper
```

### Usage

```javascript
const scrapper = require("url-scrapper");

try {
  const metadata = await scrapper("https://github.com")
  console.log('metadata info', metadata);

  //response
  /**
  * { 
  *   author: null,
  *   date: null,
  *   description: 'GitHub is where people build software..',
  *   image: 'https://assets-cdn.github.com/images/modules/open_graph/github-logo.png',
  *   logo: 'https://assets-cdn.github.com/favicon.ico',
  *   publisher: 'GitHub',
  *   title: 'Build software better, together',
  *   url: 'https://github.com'
  *  }
  **/

} catch (e) {
  console.error(e);
}
```

### License

MIT
