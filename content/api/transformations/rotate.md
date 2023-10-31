---
title: "Rotation API"
date: "2023-10-10 00:00:01"
draft: false
layout: "transformations-api"
description: "Rotate an image by any angle"
---

[Get API Key](/api/developer-key)

## Rotate an image

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

##  1:1

{{< figure title="1:1" src="/aspect-ratio/1:1.png" class="dimension" >}}

##  2:1

{{< figure title="2:1" src="/aspect-ratio/2:1.png" class="dimension" >}}

##  3:2

{{< figure title="3:2" src="/aspect-ratio/3:2.png" class="dimension" >}}

##  5:3

{{< figure title="5:3" src="/aspect-ratio/5:3.png" class="dimension" >}}

##  4:3

{{< figure title="4:3" src="/aspect-ratio/4:3.png" class="dimension" >}}

##  5:4 

{{< figure title="5:4" src="/aspect-ratio/5:4.png" class="dimension" >}}

##  6:4

{{< figure title="6:4" src="/aspect-ratio/6:4.png" class="dimension" >}}

##  7:5

{{< figure title="7:5" src="/aspect-ratio/7:5.png" class="dimension" >}}

##  10:8 

{{< figure title="10:8" src="/aspect-ratio/10:8.png" class="dimension" >}}

##  16:9
{{< figure title="16:9" src="/aspect-ratio/16:9.png" class="dimension" >}}



