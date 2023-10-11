---
title: "Lighting adjustment API"
date: "2023-10-10 00:00:01"
layout: "adjust-api"
draft: false
description: "Adjust your image lighting "
---

[Get API Key](/api/developer-key)

## Adjust gamma

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

