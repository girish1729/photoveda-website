---
title: "Text Overlay API"
date: "2023-10-10 00:00:01"
layout: "api"
draft: false
description: "Add a text overlay to images using API"
---

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
curl -H 'key: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -F 'font=Text8' \
  -F 'size=40' \
  -F 'txt=Photoveda rocks' \
  -F 'color=red' \
  -f 'http://localhost:3000/v1/text/textOverlay' \
  -o out.png

```

#### Python

```python
  import requests


  payload = dict(font='Text8', size=40, txt='Photoveda rocks',
color='red');
  response = requests.post(
'http://localhost:3000/v1/text/textOverlay',
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
    body: JSON.stringify({ title: 'Blur filter' 
    font:'Text8',
    size: 40, 
    txt: "Photoveda rocks", 
    color:'red' 
})
};
fetch('http://localhost:3000/v1/text/textOverlay', requestOptions)
    .then(response => response.json())
    .then(data =>  {
		console.log(data);
    }); 
```

{{< rawhtml >}}
 </div>
{{< /rawhtml >}}



