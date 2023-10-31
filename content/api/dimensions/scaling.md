---
title: "Scaling API"
date: "2023-10-10 00:00:01"
draft: false
layout: "dimensions-api"
description: "Change the image size by stretching or by protecting aspect ration"
---

## Scale an image

| Parameter | Type | Description |
|-----------|------|-------------|
| factor      | Float | Scale factor|

### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -F 'factor=2'
  -f 'http://localhost:3000/v1/dimensions/ScaleImage' \
  -o out.png

```

#### Python

```python
  import requests
  payload = dict(factor=2)
  response = requests.post(
'http://localhost:3000/v1/dimensions/ScaleImage',
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
    body: JSON.stringify({ title: 'Blur filter', factor: 2 })
};
fetch('http://localhost:3000/v1/dimensions/ScaleImage', requestOptions)
    .then(response => response.json())
    .then(data =>  {
		console.log(data);
    }); 
```

{{< rawhtml >}}
 </div>
{{< /rawhtml >}}



