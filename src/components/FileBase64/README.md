# @desco/file-base64

> Convert file(s) to base64

## Install

``` bash
npm install --save @desco/file-base-64
```

## Use

``` js
import formatSizeFile from '@desco/file-base-64'

// Pass the file field picker
// Receive an array with base64 from each of the selected files
fileBase64('input[type=file]').then(_base64 => {
    console.log(_base64)
})
```