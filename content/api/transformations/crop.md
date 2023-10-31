---
title: "Crop API"
date: "2023-10-10 00:00:01"
draft: false
layout: "transformations-api"
description: "Crop an image by rectangle region"
---


## Crop filter

| Parameter | Type | Description |
|-----------|------|-------------|
| startX      | Integer | Start X coordinate|
| endtX      | Integer | End X coordinate|
| startY      | Integer | Start Y coordinate|
| endX      | Integer | End Y coordinate|



### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -F "startX=0" \ 
  -F "endX=100" \
  -F "startY=20" 
  -d "endY=200" \
  -f 'http://localhost:3000/v1/transform/Crop' \
  -o out.png

```

#### Python

```python
  import requests
  payload = dict(startX=0, endX=100, startY=20, endY=200);
  response = requests.post( 'http://localhost:3000/v1/transform/Crop',
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
    body: JSON.stringify({ 
	title: 'Blur filter', 
	startX: 0 ,
	endX: 100 ,
	startY: 20 ,
	endY: 200 ,
   })
};
fetch('http://localhost:3000/v1/transform/Crop', requestOptions)
    .then(response => response.json())
    .then(data =>  {
		console.log(data);
    }); 
```

{{< rawhtml >}}
 </div>
{{< /rawhtml >}}



