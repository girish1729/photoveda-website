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


## Text styles available


- {{< figure title="Text100" src="/textStyles/Text100.png" class="textStyle" >}}
- {{< figure title="Text101" src="/textStyles/Text101.png" class="textStyle" >}}
- {{< figure title="Text102" src="/textStyles/Text102.png" class="textStyle" >}}
- {{< figure title="Text103" src="/textStyles/Text103.png" class="textStyle" >}}
- {{< figure title="Text104" src="/textStyles/Text104.png" class="textStyle" >}}
- {{< figure title="Text105" src="/textStyles/Text105.png" class="textStyle" >}}
- {{< figure title="Text106" src="/textStyles/Text106.png" class="textStyle" >}}
- {{< figure title="Text107" src="/textStyles/Text107.png" class="textStyle" >}}
- {{< figure title="Text108" src="/textStyles/Text108.png" class="textStyle" >}}
- {{< figure title="Text109" src="/textStyles/Text109.png" class="textStyle" >}}
- {{< figure title="text10" src="/textStyles/text10.png" class="textStyle" >}}
- {{< figure title="Text10" src="/textStyles/Text10.png" class="textStyle" >}}
- {{< figure title="Text110" src="/textStyles/Text110.png" class="textStyle" >}}
- {{< figure title="Text111" src="/textStyles/Text111.png" class="textStyle" >}}
- {{< figure title="Text112" src="/textStyles/Text112.png" class="textStyle" >}}
- {{< figure title="Text113" src="/textStyles/Text113.png" class="textStyle" >}}
- {{< figure title="Text114" src="/textStyles/Text114.png" class="textStyle" >}}
- {{< figure title="Text115" src="/textStyles/Text115.png" class="textStyle" >}}
- {{< figure title="Text116" src="/textStyles/Text116.png" class="textStyle" >}}
- {{< figure title="Text117" src="/textStyles/Text117.png" class="textStyle" >}}
- {{< figure title="Text118" src="/textStyles/Text118.png" class="textStyle" >}}
- {{< figure title="Text119" src="/textStyles/Text119.png" class="textStyle" >}}
- {{< figure title="text11" src="/textStyles/text11.png" class="textStyle" >}}
- {{< figure title="Text11" src="/textStyles/Text11.png" class="textStyle" >}}
- {{< figure title="Text120" src="/textStyles/Text120.png" class="textStyle" >}}
- {{< figure title="Text121" src="/textStyles/Text121.png" class="textStyle" >}}
- {{< figure title="Text122" src="/textStyles/Text122.png" class="textStyle" >}}
- {{< figure title="Text123" src="/textStyles/Text123.png" class="textStyle" >}}
- {{< figure title="Text124" src="/textStyles/Text124.png" class="textStyle" >}}
- {{< figure title="Text125" src="/textStyles/Text125.png" class="textStyle" >}}
- {{< figure title="Text126" src="/textStyles/Text126.png" class="textStyle" >}}
- {{< figure title="Text127" src="/textStyles/Text127.png" class="textStyle" >}}
- {{< figure title="Text128" src="/textStyles/Text128.png" class="textStyle" >}}
- {{< figure title="Text129" src="/textStyles/Text129.png" class="textStyle" >}}
- {{< figure title="text12" src="/textStyles/text12.png" class="textStyle" >}}
- {{< figure title="Text12" src="/textStyles/Text12.png" class="textStyle" >}}
- {{< figure title="Text130" src="/textStyles/Text130.png" class="textStyle" >}}
- {{< figure title="Text131" src="/textStyles/Text131.png" class="textStyle" >}}
- {{< figure title="Text132" src="/textStyles/Text132.png" class="textStyle" >}}
- {{< figure title="Text133" src="/textStyles/Text133.png" class="textStyle" >}}
- {{< figure title="Text134" src="/textStyles/Text134.png" class="textStyle" >}}
- {{< figure title="Text135" src="/textStyles/Text135.png" class="textStyle" >}}
- {{< figure title="Text136" src="/textStyles/Text136.png" class="textStyle" >}}
- {{< figure title="Text137" src="/textStyles/Text137.png" class="textStyle" >}}
- {{< figure title="Text138" src="/textStyles/Text138.png" class="textStyle" >}}
- {{< figure title="Text139" src="/textStyles/Text139.png" class="textStyle" >}}
- {{< figure title="Text13" src="/textStyles/Text13.png" class="textStyle" >}}
- {{< figure title="Text140" src="/textStyles/Text140.png" class="textStyle" >}}
- {{< figure title="Text141" src="/textStyles/Text141.png" class="textStyle" >}}
- {{< figure title="Text142" src="/textStyles/Text142.png" class="textStyle" >}}
- {{< figure title="Text143" src="/textStyles/Text143.png" class="textStyle" >}}
- {{< figure title="Text144" src="/textStyles/Text144.png" class="textStyle" >}}
- {{< figure title="Text145" src="/textStyles/Text145.png" class="textStyle" >}}
- {{< figure title="Text14" src="/textStyles/Text14.png" class="textStyle" >}}
- {{< figure title="Text15" src="/textStyles/Text15.png" class="textStyle" >}}
- {{< figure title="Text16" src="/textStyles/Text16.png" class="textStyle" >}}
- {{< figure title="Text17" src="/textStyles/Text17.png" class="textStyle" >}}
- {{< figure title="Text18" src="/textStyles/Text18.png" class="textStyle" >}}
- {{< figure title="Text19" src="/textStyles/Text19.png" class="textStyle" >}}
- {{< figure title="Text20" src="/textStyles/Text20.png" class="textStyle" >}}
- {{< figure title="Text21" src="/textStyles/Text21.png" class="textStyle" >}}
- {{< figure title="Text22" src="/textStyles/Text22.png" class="textStyle" >}}
- {{< figure title="Text23" src="/textStyles/Text23.png" class="textStyle" >}}
- {{< figure title="Text24" src="/textStyles/Text24.png" class="textStyle" >}}
- {{< figure title="Text25" src="/textStyles/Text25.png" class="textStyle" >}}
- {{< figure title="Text26" src="/textStyles/Text26.png" class="textStyle" >}}
- {{< figure title="Text27" src="/textStyles/Text27.png" class="textStyle" >}}
- {{< figure title="Text28" src="/textStyles/Text28.png" class="textStyle" >}}
- {{< figure title="Text29" src="/textStyles/Text29.png" class="textStyle" >}}
- {{< figure title="text2" src="/textStyles/text2.png" class="textStyle" >}}
- {{< figure title="Text2" src="/textStyles/Text2.png" class="textStyle" >}}
- {{< figure title="Text30" src="/textStyles/Text30.png" class="textStyle" >}}
- {{< figure title="Text31" src="/textStyles/Text31.png" class="textStyle" >}}
- {{< figure title="Text32" src="/textStyles/Text32.png" class="textStyle" >}}
- {{< figure title="Text33" src="/textStyles/Text33.png" class="textStyle" >}}
- {{< figure title="Text34" src="/textStyles/Text34.png" class="textStyle" >}}
- {{< figure title="Text35" src="/textStyles/Text35.png" class="textStyle" >}}
- {{< figure title="Text36" src="/textStyles/Text36.png" class="textStyle" >}}
- {{< figure title="Text37" src="/textStyles/Text37.png" class="textStyle" >}}
- {{< figure title="Text38" src="/textStyles/Text38.png" class="textStyle" >}}
- {{< figure title="Text39" src="/textStyles/Text39.png" class="textStyle" >}}
- {{< figure title="text3" src="/textStyles/text3.png" class="textStyle" >}}
- {{< figure title="Text3" src="/textStyles/Text3.png" class="textStyle" >}}
- {{< figure title="Text40" src="/textStyles/Text40.png" class="textStyle" >}}
- {{< figure title="Text41" src="/textStyles/Text41.png" class="textStyle" >}}
- {{< figure title="Text42" src="/textStyles/Text42.png" class="textStyle" >}}
- {{< figure title="Text43" src="/textStyles/Text43.png" class="textStyle" >}}
- {{< figure title="Text44" src="/textStyles/Text44.png" class="textStyle" >}}
- {{< figure title="Text45" src="/textStyles/Text45.png" class="textStyle" >}}
- {{< figure title="Text46" src="/textStyles/Text46.png" class="textStyle" >}}
- {{< figure title="Text47" src="/textStyles/Text47.png" class="textStyle" >}}
- {{< figure title="Text48" src="/textStyles/Text48.png" class="textStyle" >}}
- {{< figure title="Text49" src="/textStyles/Text49.png" class="textStyle" >}}
- {{< figure title="text4" src="/textStyles/text4.png" class="textStyle" >}}
- {{< figure title="Text4" src="/textStyles/Text4.png" class="textStyle" >}}
- {{< figure title="Text50" src="/textStyles/Text50.png" class="textStyle" >}}
- {{< figure title="Text51" src="/textStyles/Text51.png" class="textStyle" >}}
- {{< figure title="Text52" src="/textStyles/Text52.png" class="textStyle" >}}
- {{< figure title="Text53" src="/textStyles/Text53.png" class="textStyle" >}}
- {{< figure title="Text54" src="/textStyles/Text54.png" class="textStyle" >}}
- {{< figure title="Text55" src="/textStyles/Text55.png" class="textStyle" >}}
- {{< figure title="Text56" src="/textStyles/Text56.png" class="textStyle" >}}
- {{< figure title="Text57" src="/textStyles/Text57.png" class="textStyle" >}}
- {{< figure title="Text58" src="/textStyles/Text58.png" class="textStyle" >}}
- {{< figure title="Text59" src="/textStyles/Text59.png" class="textStyle" >}}
- {{< figure title="text5" src="/textStyles/text5.png" class="textStyle" >}}
- {{< figure title="Text60" src="/textStyles/Text60.png" class="textStyle" >}}
- {{< figure title="Text61" src="/textStyles/Text61.png" class="textStyle" >}}
- {{< figure title="Text62" src="/textStyles/Text62.png" class="textStyle" >}}
- {{< figure title="Text63" src="/textStyles/Text63.png" class="textStyle" >}}
- {{< figure title="Text64" src="/textStyles/Text64.png" class="textStyle" >}}
- {{< figure title="Text65" src="/textStyles/Text65.png" class="textStyle" >}}
- {{< figure title="Text66" src="/textStyles/Text66.png" class="textStyle" >}}
- {{< figure title="Text67" src="/textStyles/Text67.png" class="textStyle" >}}
- {{< figure title="Text68" src="/textStyles/Text68.png" class="textStyle" >}}
- {{< figure title="Text69" src="/textStyles/Text69.png" class="textStyle" >}}
- {{< figure title="text6" src="/textStyles/text6.png" class="textStyle" >}}
- {{< figure title="Text70" src="/textStyles/Text70.png" class="textStyle" >}}
- {{< figure title="Text71" src="/textStyles/Text71.png" class="textStyle" >}}
- {{< figure title="Text72" src="/textStyles/Text72.png" class="textStyle" >}}
- {{< figure title="Text73" src="/textStyles/Text73.png" class="textStyle" >}}
- {{< figure title="Text74" src="/textStyles/Text74.png" class="textStyle" >}}
- {{< figure title="Text75" src="/textStyles/Text75.png" class="textStyle" >}}
- {{< figure title="Text76" src="/textStyles/Text76.png" class="textStyle" >}}
- {{< figure title="Text77" src="/textStyles/Text77.png" class="textStyle" >}}
- {{< figure title="Text78" src="/textStyles/Text78.png" class="textStyle" >}}
- {{< figure title="Text79" src="/textStyles/Text79.png" class="textStyle" >}}
- {{< figure title="text7" src="/textStyles/text7.png" class="textStyle" >}}
- {{< figure title="Text7" src="/textStyles/Text7.png" class="textStyle" >}}
- {{< figure title="Text80" src="/textStyles/Text80.png" class="textStyle" >}}
- {{< figure title="Text81" src="/textStyles/Text81.png" class="textStyle" >}}
- {{< figure title="Text82" src="/textStyles/Text82.png" class="textStyle" >}}
- {{< figure title="Text83" src="/textStyles/Text83.png" class="textStyle" >}}
- {{< figure title="Text84" src="/textStyles/Text84.png" class="textStyle" >}}
- {{< figure title="Text85" src="/textStyles/Text85.png" class="textStyle" >}}
- {{< figure title="Text86" src="/textStyles/Text86.png" class="textStyle" >}}
- {{< figure title="Text87" src="/textStyles/Text87.png" class="textStyle" >}}
- {{< figure title="Text88" src="/textStyles/Text88.png" class="textStyle" >}}
- {{< figure title="Text89" src="/textStyles/Text89.png" class="textStyle" >}}
- {{< figure title="text8" src="/textStyles/text8.png" class="textStyle" >}}
- {{< figure title="Text8" src="/textStyles/Text8.png" class="textStyle" >}}
- {{< figure title="Text90" src="/textStyles/Text90.png" class="textStyle" >}}
- {{< figure title="Text91" src="/textStyles/Text91.png" class="textStyle" >}}
- {{< figure title="Text92" src="/textStyles/Text92.png" class="textStyle" >}}
- {{< figure title="Text93" src="/textStyles/Text93.png" class="textStyle" >}}
- {{< figure title="Text94" src="/textStyles/Text94.png" class="textStyle" >}}
- {{< figure title="Text95" src="/textStyles/Text95.png" class="textStyle" >}}
- {{< figure title="Text96" src="/textStyles/Text96.png" class="textStyle" >}}
- {{< figure title="Text97" src="/textStyles/Text97.png" class="textStyle" >}}
- {{< figure title="Text98" src="/textStyles/Text98.png" class="textStyle" >}}
- {{< figure title="Text99" src="/textStyles/Text99.png" class="textStyle" >}}
- {{< figure title="text9" src="/textStyles/text9.png" class="textStyle" >}}
- {{< figure title="Text9" src="/textStyles/Text9.png" class="textStyle" >}}
