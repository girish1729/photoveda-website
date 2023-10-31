---
title: "Stickers API"
date: "2023-10-10 00:00:01"
layout: "api"
description: "Add an emoji sticker on top of image to show emotion"
---


## Add Sticker to images

| Parameter | Type | Description |
|-----------|------|-------------|
| stickerURL      | String | URL to sticker image |


### Sample code

#### Curl

```bash
curl -H 'key: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -F 'stickerURL=PATH-TO-IMAGE' \
  -f 'http://localhost:3000/v1/sticker/addSticker' \
  -o out.png

```

#### Python

```python
  import requests


  payload = dict(stickerURL=PATH-TO-IMAGE);
  response = requests.post(
'http://localhost:3000/v1/sticker/addSticker',
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
    body: JSON.stringify({ title: 'Add sticker' ,
    stickerURL:'PATH-TO-IMAGE' 
})
};
fetch('http://localhost:3000/v1/sticker/addSticker', requestOptions)
    .then(response => response.json())
    .then(data =>  {
		console.log(data);
    }); 
```

{{< rawhtml >}}
 </div>
{{< /rawhtml >}}



