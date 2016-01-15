# document-visibility [![Build Status](https://travis-ci.org/bendrucker/document-visibility.svg?branch=master)](https://travis-ci.org/bendrucker/document-visibility)

> Handle changes to browser document visibility using the [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)


## Install

```
$ npm install --save document-visibility
```


## Usage

```js
var Visibility = require('document-visibility')
var visibility = Visibility()

visibility.visible()
//=> true/false

visibility.onChange(function (visible) {
  //=> true/false  
})
```

## API

#### `visibility.visible()` -> `boolean`

Returns the visibility of the document. If the browser does not support the visibility API, this will always be `true`.

#### `visibility.onChange(fn)` -> `function`

Returns an unlisten function.

##### fn

*Required*  
Type: `function`  
Arguments: `visible`

A function to call when the page visibility changes.


## License

MIT © [Ben Drucker](http://bendrucker.me)
