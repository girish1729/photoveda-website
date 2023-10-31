---
title: "Frames and Borders API"
date: "2023-10-10 00:00:01"
layout: "api"
description: "Add frames and borders to images using API"
---


## Add text Overlay to images

| Parameter | Type | Description |
|-----------|------|-------------|
| color      | Integer | HTML color code|
| width      | Integer | Pixels|


### Sample code

#### Curl

```bash
curl -H 'key: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -F 'color=red' \
  -F 'width=40' \
  -f 'http://localhost:3000/v1/frame/addFrame' \
  -o out.png

```

#### Python

```python
  import requests


  payload = dict(color='red', width=40 );
  response = requests.post(
'http://localhost:3000/v1/frame/addFrame',
    files={'file': open('/path/to/file.jpg', 'rb')},
    data = payload,
    headers={'key': 'INSERT_YOUR_API_KEY_HERE'},
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
    body: JSON.stringify({ title: 'Add frame' 
    color:'red',
    width: 40, 
})
};
fetch('http://localhost:3000/v1/frame/addFrame', requestOptions)
    .then(response => response.json())
    .then(data =>  {
		console.log(data);
    }); 
```

{{< rawhtml >}}
 </div>
{{< /rawhtml >}}



