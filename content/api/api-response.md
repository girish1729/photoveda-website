---
title: "API footer"
date: "2023-10-10 00:00:01"
type: "api-footer"
draft: false
description: "API footer"
---


## Response description

## Normal return

```bash

{
    "code": 0,
    "data": {
        "imageBase64: "iVBORw0KGgo..." //base64 of the image 
    },
    "msg": null,
    "time": 1590462453264
}
```

### Error

```bash
{
  "code": 1001, //
  "data": null
  "msg": 'Insufficient balance',
  "time": 1590462453264
}
```

---

## Returning JSON

```bash
curl -d "key=testphotoveda" -d 'outType=JSON' -d \
'imageURL=https://source.unsplash.com/random' \
localhost:3000/v1/addImageURL

```

## Returning download 

```bash
curl -d "key=testphotoveda" -d 'outType=Download' -d \
'imageURL=https://source.unsplash.com/random' \
localhost:3000/v1/addImageURL
```


## Returning Blob 

```bash
curl -d "key=testphotoveda" -d 'outType=Blob' \
-d 'imageURL=https://source.unsplash.com/random' \
localhost:3000/v1/addImageURL
```


##  Returning Base64

```bash
curl -d "key=testphotoveda" -d 'outType=Base64' -d \
'imageURL=https://source.unsplash.com/random'  \
localhost:3000/v1/addImageURL 
```




