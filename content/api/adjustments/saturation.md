---
title: "Saturation API"
date: "2023-10-10 00:00:01"
layout: "adjust-api"
draft: false
description: "Adjust your image saturation "
---


## Saturation adjustment

| Parameter | Type | Description |
|-----------|------|-------------|
| saturation | Float | Saturation val between 0 and 1|

### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -F 'brightness=0.3' \
  -f 'http://localhost:3000/v1/adjust/Saturation' \
  -o out.png

```

#### Python

```python
  import requests
  payload = dict(brightness=0.3 )
  response = requests.post( 'http://localhost:3000/v1/adjust/Saturation',
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
    body: JSON.stringify({ title: 'Adjust brightness', brightness: 0.3 })
};
fetch('http://localhost:3000/v1/adjust/Saturation', requestOptions)
    .then(response => response.json())
    .then(data =>  {
		console.log(data);
    }); 
```

{{< rawhtml >}}
 </div>
{{< /rawhtml >}}



