---
title: "Blur API"
date: "2023-10-10 00:00:01"
layout: "filter-api"
draft: false
description: "Apply blur effect"
---


{{< figure title="Blur" src="/filters/blur.png"  >}}

## Blur filter

| Parameter | Type | Description |
|-----------|------|-------------|
| blur      | Float | Blur radius|

### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -F 'blur=0.3' \
  -f 'http://localhost:3000/v1/filter/Blur' \
  -o out.png

```

#### Python

```python
  import requests
  payload = dict(blur=0.3 )
  response = requests.post( 'http://localhost:3000/v1/filter/Blur',
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
    body: JSON.stringify({ title: 'Blur filter', blur: 0.3 })
};
fetch('http://localhost:3000/v1/filter/Blur', requestOptions)
    .then(response => response.json())
    .then(data =>  {
		console.log(data);
    }); 
```

{{< rawhtml >}}
 </div>
{{< /rawhtml >}}



