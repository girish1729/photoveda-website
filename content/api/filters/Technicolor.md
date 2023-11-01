---
title: "Technicolor API"
date: "2023-10-10 00:00:01"
layout: "filter-api"
draft: false
description: "Apply Technicolor filter"
---



## Technicolor filter

{{< figure title="Technicolor" src="/filters/technicolor.png"  >}}

### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -f 'http://localhost:3000/v1/filter/Technicolor' \
  -o out.png

```

#### Python

```python
  import requests
  response = requests.post(
'http://localhost:3000/v1/filter/Technicolor',
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
fetch('http://localhost:3000/v1/filter/Technicolor', requestOptions)
    .then(response => response.json())
    .then(data =>  {
		console.log(data);
    }); 
```

{{< rawhtml >}}
 </div>
{{< /rawhtml >}}



