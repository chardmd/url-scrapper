# url-scrapper

A node.js module that extracts the metadata of a URL

### Install

```
npm install url-scrapper
```

### Usage

```javascript
import scrapper from 'url-scrapper'

try {
  const metadata = await scrapper("https://github.com")
  console.log('metadata info', metadata);
} catch (e) {
  console.error(e);
}
```

### License

MIT
