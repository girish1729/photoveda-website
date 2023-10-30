---
title: "Text Overlay API"
date: "2023-10-10 00:00:01"
layout: "api"
draft: false
description: "Add a text overlay to images using API"
---

[Get API Key](/api/developer-key)

## Add text Overlay to images

| Parameter | Type | Description |
|-----------|------|-------------|
| name      | String | Type of work |
| font      | String | Font name|
| size      | Integer | size in pixels|
| posX      | Integer | X coordinate position|
| posY      | Integer | Y coordinate position|

### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -f 'https://www.photoveda.pro/api/v1/matting2?mattingType=6&crop=true' \
  -o out.png

```

#### Python

```python
  import requests
  response = requests.post(
    'https://www.photoveda.pro/api/v1/matting2?mattingType=6',
    files={'file': open('/path/to/file.jpg', 'rb')},
    headers={'APIKEY': 'INSERT_YOUR_API_KEY_HERE'},
  )
```

#### Node.js

{{< rawhtml >}}
 <div class='editable' onClick="this.contentEditable='true';">
{{< /rawhtml >}}
```node.js
  var request = require('request');
  var fs = require('fs');

  request.post({
    url: 'https://www.photoveda.pro/api/v1/matting2?mattingType=6',
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


{{< rawhtml >}}
 <div class='editable' onClick="this.contentEditable='true';">
{{< /rawhtml >}}

```node.js
 // Simple POST request with a JSON body using fetch
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Fetch POST Request Example' })
};
fetch('https://reqres.in/api/articles', requestOptions)
    .then(response => response.json())
    .then(data =>  {
		console.log(data);
    }); 
```

{{< rawhtml >}}
 </div>
{{< /rawhtml >}}

