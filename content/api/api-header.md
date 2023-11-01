---
title: "API Header"
date: "2023-10-10 00:00:01"
type: "api-header"
draft: false
description: "API header"
---


[Get API Key](/generate-api-key)

#### Normal return

```bash

{
    "code": 0,
    "data": {
        "imageBase64: "iVBORw0KGgo..." //base64 encoded of the image 
    },
    "msg": null,
    "time": 1590462453264
}
```

#### Error

```bash
{
  "code": 1001, //
  "data": null
  "msg": 'Insufficient balance',
  "time": 1590462453264
}
```


