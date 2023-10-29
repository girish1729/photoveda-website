---
title: "Kodachrome API"
date: "2023-10-10 00:00:01"
layout: "filter-api"
draft: false
description: "Apply Kodachrome filter"
---

[Get API Key](/api/developer-key)

## 1a. Adjust gamma (Binary stream)

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

{{< rawhtml >}}
 <div class='editable' onClick="this.contentEditable='true';">
		<strong> FIXED </strong>
{{< /rawhtml >}}
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

{{< rawhtml >}}
</div>
{{< /rawhtml >}}
### Request description

### Response description

#### Normal return

```bash

{
    "code": 0,
    "data": {
        "imageBase64: "iVBORw0KGgo..." //base64 encoded string of the
image with background removed
    },
    "msg": null,
    "time": 1590462453264
}
```

#### Error

```bash
{
  "code": 1001, //
  "data": null
  "msg": 'Insufficient balance',
  "time": 1590462453264
}
```

---

## 1b. Adjust gamma (Base64)

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

### Request description

### Response description

#### Normal return

```bash

{
    "code": 0,
    "data": {
        "imageBase64: "iVBORw0KGgo..." //base64 encoded string of the
image with background removed
    },
    "msg": null,
    "time": 1590462453264
}
```

#### Error

```bash
{
  "code": 1001, //
  "data": null
  "msg": 'Insufficient balance',
  "time": 1590462453264
}
```

---

## 1c. Adjust gamma (Base64 encoded imageURL)

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

### Request description

### Response description

#### Normal return

```bash

{
    "code": 0,
    "data": {
        "imageBase64: "iVBORw0KGgo..." //base64 encoded string of the
image with background removed
    },
    "msg": null,
    "time": 1590462453264
}
```

#### Error

```bash
{
  "code": 1001, //
  "data": null
  "msg": 'Insufficient balance',
  "time": 1590462453264
}
```


