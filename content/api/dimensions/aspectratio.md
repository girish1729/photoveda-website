---
title: "Dimensions API"
date: "2023-10-10 00:00:01"
draft: false
layout: "dimensions-api"
description: "Change the image size by stretching or by protecting aspect ration"
---

## Change aspect ratio

| Parameter | Type | Description |
|-----------|------|-------------|
| aspectRatio      | String | Either of 4:3, 5:4, 16:9, 1:1, 2:1, 3:2, 10:8 |


### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -F 'aspectRatio=4:3'
  -f 'http://localhost:3000/v1/dimensions/changeAspectRatio' \
  -o out.png

```

#### Python

```python
  import requests
  payload = dict(aspectRatio='4:3');
  response = requests.post(
'http://localhost:3000/v1/dimension/changeAspectRatio',
    files={'file': open('/path/to/file.jpg', 'rb')},
    data = payload,
    headers={'KEY': 'INSERT_YOUR_API_KEY_HERE'},
  )
```

#### Node.js

{{< rawhtml >}}
 <div class='editable' onClick="this.contentEditable='true';">
{{< /rawhtml >}}

```node.js
const requestOptions = {
    method: 'POST',
    headers: {
    'key': 'INSERT_YOUR_API_KEY_HERE',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: 'Blur filter', aspectRatio: '4:3' })
};
fetch('http://localhost:3000/v1/api/Blur', requestOptions)
    .then(response => response.json())
    .then(data =>  {
		console.log(data);
    }); 
```

{{< rawhtml >}}
 </div>
{{< /rawhtml >}}



