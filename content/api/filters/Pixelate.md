---
title: "Pixelate API"
date: "2023-10-10 00:00:01"
layout: "filter-api"
draft: false
description: "Apply Pixelate on image"
---

{{< figure title="Pixelate" src="/filters/pixelate.png"  >}}


## Pixelate filter


### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -f 'http://localhost:3000/v1/filter/Pixelate' \
  -o out.png

```

#### Python

```python
  import requests
  response = requests.post(
'http://localhost:3000/v1/filter/Pixelate',
    files={'file': open('/path/to/file.jpg', 'rb')},
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
    }
};
fetch('http://localhost:3000/v1/filter/Pixelate', requestOptions)
    .then(response => response.json())
    .then(data =>  {
		console.log(data);
    }); 
```

{{< rawhtml >}}
 </div>
{{< /rawhtml >}}



