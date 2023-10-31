---
title: "Rotation API"
date: "2023-10-10 00:00:01"
draft: false
layout: "transformations-api"
description: "Rotate an image by any angle"
---


## Rotate an image

| Parameter | Type | Description |
|-----------|------|-------------|
| rotate      | Integer | 0 to 360 degrees to rotate|


### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -F 'rotate=90' \
  -f 'http://localhost:3000/v1/transform/Rotate' \
  -o out.png

```

#### Python

```python
  import requests
  payload = dict(rotate=90 )
  response = requests.post( 'http://localhost:3000/v1/transform/Rotate',
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
    body: JSON.stringify({ title: 'Blur filter', rotate: 90 })
};
fetch('http://localhost:3000/v1/transform/Rotate', requestOptions)
    .then(response => response.json())
    .then(data =>  {
		console.log(data);
    }); 
```

{{< rawhtml >}}
 </div>
{{< /rawhtml >}}



