---
title: "Shapes like squares, circles and hexagons using API"
date: "2023-10-10 00:00:01"
layout: "api"
description: "Overlay shapes on top of images using API"
---
[Get API Key](/api/developer-key)


## Arrows


{{< figure title="Arrows" src="/shapes/arrow-shape.svg" class="shape" >}}

| Parameter | Type | Description |
|-----------|------|-------------|
| shape      | String | One of the shape type|
| dimensions  | Integer | The coordinates |

### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -f 'https://www.cutout.pro/api/v1/matting2?mattingType=6&crop=true' \
  -o out.png

```

#### Python

```python
  import requests
  response = requests.post(
    'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    files={'file': open('/path/to/file.jpg', 'rb')},
    headers={'APIKEY': 'INSERT_YOUR_API_KEY_HERE'},
  )
```

#### Node.js

```node.js
  var request = require('request');
  var fs = require('fs');

  request.post({
    url: 'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    formData: {
    file: fs.createReadStream('/path/to/file.jpg')
    },
    headers: {
    'APIKEY': 'INSERT_YOUR_API_KEY_HERE'
    },
    encoding: null
  }, function(error, response, body) {
    // console.log(response);
  });
```

Some filler text.

---

## Lines

{{< figure title="Line" src="/shapes/line-shape.svg" class="shape" >}}

| Parameter | Type | Description |
|-----------|------|-------------|
| name      | String | Type of work |
| gamma      | Integer | Gamma value|

### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -f 'https://www.cutout.pro/api/v1/matting2?mattingType=6&crop=true' \
  -o out.png

```

#### Python

```python
  import requests
  response = requests.post(
    'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    files={'file': open('/path/to/file.jpg', 'rb')},
    headers={'APIKEY': 'INSERT_YOUR_API_KEY_HERE'},
  )
```

#### Node.js

```node.js
  var request = require('request');
  var fs = require('fs');

  request.post({
    url: 'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    formData: {
    file: fs.createReadStream('/path/to/file.jpg')
    },
    headers: {
    'APIKEY': 'INSERT_YOUR_API_KEY_HERE'
    },
    encoding: null
  }, function(error, response, body) {
    // console.log(response);
  });
```
Some filler text.

---
---


## Circle

{{< figure title="Circle" src="/shapes/circle-shape.svg" class="shape" >}}

| Parameter | Type | Description |
|-----------|------|-------------|
| name      | String | Type of work |
| gamma      | Integer | Gamma value|

### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -f 'https://www.cutout.pro/api/v1/matting2?mattingType=6&crop=true' \
  -o out.png

```

#### Python

```python
  import requests
  response = requests.post(
    'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    files={'file': open('/path/to/file.jpg', 'rb')},
    headers={'APIKEY': 'INSERT_YOUR_API_KEY_HERE'},
  )
```

#### Node.js

```node.js
  var request = require('request');
  var fs = require('fs');

  request.post({
    url: 'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    formData: {
    file: fs.createReadStream('/path/to/file.jpg')
    },
    headers: {
    'APIKEY': 'INSERT_YOUR_API_KEY_HERE'
    },
    encoding: null
  }, function(error, response, body) {
    // console.log(response);
  });
```

Some filler text.

---

---

## Ellipse

{{< figure title="Ellipse" src="/shapes/ellipse-shape.svg" class="shape" >}}

| Parameter | Type | Description |
|-----------|------|-------------|
| name      | String | Type of work |
| gamma      | Integer | Gamma value|

### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -f 'https://www.cutout.pro/api/v1/matting2?mattingType=6&crop=true' \
  -o out.png

```

#### Python

```python
  import requests
  response = requests.post(
    'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    files={'file': open('/path/to/file.jpg', 'rb')},
    headers={'APIKEY': 'INSERT_YOUR_API_KEY_HERE'},
  )
```

#### Node.js

```node.js
  var request = require('request');
  var fs = require('fs');

  request.post({
    url: 'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    formData: {
    file: fs.createReadStream('/path/to/file.jpg')
    },
    headers: {
    'APIKEY': 'INSERT_YOUR_API_KEY_HERE'
    },
    encoding: null
  }, function(error, response, body) {
    // console.log(response);
  });
```

## Square

{{< figure title="Square" src="/shapes/square-shape.svg" class="shape" >}}

| Parameter | Type | Description |
|-----------|------|-------------|
| name      | String | Type of work |
| gamma      | Integer | Gamma value|

### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -f 'https://www.cutout.pro/api/v1/matting2?mattingType=6&crop=true' \
  -o out.png

```

#### Python

```python
  import requests
  response = requests.post(
    'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    files={'file': open('/path/to/file.jpg', 'rb')},
    headers={'APIKEY': 'INSERT_YOUR_API_KEY_HERE'},
  )
```

#### Node.js

```node.js
  var request = require('request');
  var fs = require('fs');

  request.post({
    url: 'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    formData: {
    file: fs.createReadStream('/path/to/file.jpg')
    },
    headers: {
    'APIKEY': 'INSERT_YOUR_API_KEY_HERE'
    },
    encoding: null
  }, function(error, response, body) {
    // console.log(response);
  });
```

## Rectangle

{{< figure title="Rectangle" src="/shapes/rectangle-shape.svg" class="shape" >}}

| Parameter | Type | Description |
|-----------|------|-------------|
| name      | String | Type of work |
| gamma      | Integer | Gamma value|

### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -f 'https://www.cutout.pro/api/v1/matting2?mattingType=6&crop=true' \
  -o out.png

```

#### Python

```python
  import requests
  response = requests.post(
    'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    files={'file': open('/path/to/file.jpg', 'rb')},
    headers={'APIKEY': 'INSERT_YOUR_API_KEY_HERE'},
  )
```

#### Node.js

```node.js
  var request = require('request');
  var fs = require('fs');

  request.post({
    url: 'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    formData: {
    file: fs.createReadStream('/path/to/file.jpg')
    },
    headers: {
    'APIKEY': 'INSERT_YOUR_API_KEY_HERE'
    },
    encoding: null
  }, function(error, response, body) {
    // console.log(response);
  });
```

## Hexagon

{{< figure title="Hexagon" src="/shapes/hexagon-shape.svg" class="shape" >}}

| Parameter | Type | Description |
|-----------|------|-------------|
| name      | String | Type of work |
| gamma      | Integer | Gamma value|

### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -f 'https://www.cutout.pro/api/v1/matting2?mattingType=6&crop=true' \
  -o out.png

```

#### Python

```python
  import requests
  response = requests.post(
    'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    files={'file': open('/path/to/file.jpg', 'rb')},
    headers={'APIKEY': 'INSERT_YOUR_API_KEY_HERE'},
  )
```

#### Node.js

```node.js
  var request = require('request');
  var fs = require('fs');

  request.post({
    url: 'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    formData: {
    file: fs.createReadStream('/path/to/file.jpg')
    },
    headers: {
    'APIKEY': 'INSERT_YOUR_API_KEY_HERE'
    },
    encoding: null
  }, function(error, response, body) {
    // console.log(response);
  });
```

## Star

{{< figure title="Star" src="/shapes/star-shape.svg" class="shape" >}}

| Parameter | Type | Description |
|-----------|------|-------------|
| name      | String | Type of work |
| gamma      | Integer | Gamma value|

### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -f 'https://www.cutout.pro/api/v1/matting2?mattingType=6&crop=true' \
  -o out.png

```

#### Python

```python
  import requests
  response = requests.post(
    'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    files={'file': open('/path/to/file.jpg', 'rb')},
    headers={'APIKEY': 'INSERT_YOUR_API_KEY_HERE'},
  )
```

#### Node.js

```node.js
  var request = require('request');
  var fs = require('fs');

  request.post({
    url: 'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    formData: {
    file: fs.createReadStream('/path/to/file.jpg')
    },
    headers: {
    'APIKEY': 'INSERT_YOUR_API_KEY_HERE'
    },
    encoding: null
  }, function(error, response, body) {
    // console.log(response);
  });
```

