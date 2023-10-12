---
title: "Stickers API"
date: "2023-10-10 00:00:01"
layout: "api"
description: "Add an emoji sticker on top of image to show emotion"
---
[Get API Key](/api/developer-key)

## Stickers

| Parameter | Type | Description |
|-----------|------|-------------|
| name      | String | Type of work |
| gamma      | Integer | Gamma value|

### Sample code

#### Curl

```bash
curl -H 'APIKEY: INSERT_YOUR_API_KEY_HERE' \
  -F 'file=@/path/to/file.jpg'     \
  -f 'https://www.cutout.pro/api/v1/matting2?mattingType=6&crop=true' \
  -o out.png

```

#### Python

```python
  import requests
  response = requests.post(
    'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    files={'file': open('/path/to/file.jpg', 'rb')},
    headers={'APIKEY': 'INSERT_YOUR_API_KEY_HERE'},
  )
```

#### Node.js

```node.js
  var request = require('request');
  var fs = require('fs');

  request.post({
    url: 'https://www.cutout.pro/api/v1/matting2?mattingType=6',
    formData: {
    file: fs.createReadStream('/path/to/file.jpg')
    },
    headers: {
    'APIKEY': 'INSERT_YOUR_API_KEY_HERE'
    },
    encoding: null
  }, function(error, response, body) {
    // console.log(response);
  });
```

## Bathroom


- {{< figure title="Body wash" src="/stickers/bathroom/body-wash.svg" class="sticker" >}}

- {{< figure title="Comb" src="/stickers/bathroom/comb.svg" class="sticker" >}}
- {{< figure title="Detergent" src="/stickers/bathroom/detergent.svg" class="sticker" >}}
- {{< figure title="Duck" src="/stickers/bathroom/duck.svg" class="sticker" >}}
- {{< figure title="GarbageCan" src="/stickers/bathroom/garbage-can.svg" class="sticker" >}}
- {{< figure title="HairDryer" src="/stickers/bathroom/hair-dryer.svg" class="sticker" >}}
- {{< figure title="LaundryDetergent" src="/stickers/bathroom/laundry-detergent.svg" class="sticker" >}}
- {{< figure title="Mirror" src="/stickers/bathroom/mirror.svg" class="sticker" >}}
- {{< figure title="MouthwashCup" src="/stickers/bathroom/mouthwash-cup.svg" class="sticker" >}}
- {{< figure title="Razor" src="/stickers/bathroom/razor.svg" class="sticker" >}}
- {{< figure title="Sink" src="/stickers/bathroom/sink.svg" class="sticker" >}}
- {{< figure title="Soap" src="/stickers/bathroom/soap.svg" class="sticker" >}}
- {{< figure title="ToiletPaper" src="/stickers/bathroom/toilet-paper.svg" class="sticker" >}}
- {{< figure title="ToiletSuction" src="/stickers/bathroom/toilet-suction.svg" class="sticker" >}}
- {{< figure title="Toilet" src="/stickers/bathroom/toilet.svg" class="sticker" >}}
- {{< figure title="Toothbrush" src="/stickers/bathroom/toothbrush.svg" class="sticker" >}}
- {{< figure title="Toothpaste" src="/stickers/bathroom/toothpaste.svg" class="sticker" >}}
- {{< figure title="Towel" src="/stickers/bathroom/towel.svg" class="sticker" >}}
- {{< figure title="Tub" src="/stickers/bathroom/tub.svg" class="sticker" >}}
- {{< figure title="WashingMachine" src="/stickers/bathroom/washing-machine.svg" class="sticker" >}}

## Business


- {{< figure title="AdhesiveStrip" src="/stickers/office/adhesive-strip.svg" class="sticker" >}}
- {{< figure title="Analyze" src="/stickers/office/analyze.svg" class="sticker" >}}
- {{< figure title="Bookshelf" src="/stickers/office/bookshelf.svg" class="sticker" >}}
- {{< figure title="Briefcase" src="/stickers/office/briefcase.svg" class="sticker" >}}
- {{< figure title="BusinessCard" src="/stickers/office/business-card.svg" class="sticker" >}}
- {{< figure title="Calculator" src="/stickers/office/calculator.svg" class="sticker" >}}
- {{< figure title="Clock" src="/stickers/office/clock.svg" class="sticker" >}}
- {{< figure title="CorrectionTape" src="/stickers/office/correction-tape.svg" class="sticker" >}}
- {{< figure title="DataBuried" src="/stickers/office/data-buried.svg" class="sticker" >}}
- {{< figure title="Data" src="/stickers/office/data.svg" class="sticker" >}}
- {{< figure title="DeskLamp" src="/stickers/office/desk-lamp.svg" class="sticker" >}}
- {{< figure title="Folder" src="/stickers/office/folder.svg" class="sticker" >}}
- {{< figure title="Indicator" src="/stickers/office/indicator.svg" class="sticker" >}}
- {{< figure title="Introduce" src="/stickers/office/introduce.svg" class="sticker" >}}
- {{< figure title="Medal" src="/stickers/office/medal.svg" class="sticker" >}}
- {{< figure title="Mouse" src="/stickers/office/mouse.svg" class="sticker" >}}
- {{< figure title="Notebook" src="/stickers/office/notebook.svg" class="sticker" >}}
- {{< figure title="OfficeChair" src="/stickers/office/office-chair.svg" class="sticker" >}}
- {{< figure title="Office" src="/stickers/office/office.svg" class="sticker" >}}
- {{< figure title="Order" src="/stickers/office/order.svg" class="sticker" >}}
- {{< figure title="PencilSharpener" src="/stickers/office/pencil-sharpener.svg" class="sticker" >}}
- {{< figure title="Pen" src="/stickers/office/pen.svg" class="sticker" >}}
- {{< figure title="PieChart" src="/stickers/office/pie-chart.svg" class="sticker" >}}
- {{< figure title="Planning" src="/stickers/office/planning.svg" class="sticker" >}}
- {{< figure title="Printer" src="/stickers/office/printer.svg" class="sticker" >}}
- {{< figure title="Project" src="/stickers/office/project.svg" class="sticker" >}}
- {{< figure title="Report" src="/stickers/office/report.svg" class="sticker" >}}
- {{< figure title="Scissors" src="/stickers/office/scissors.svg" class="sticker" >}}
- {{< figure title="Stapler" src="/stickers/office/stapler.svg" class="sticker" >}}
- {{< figure title="Statistics" src="/stickers/office/statistics.svg" class="sticker" >}}
- {{< figure title="Telephone" src="/stickers/office/telephone.svg" class="sticker" >}}
- {{< figure title="WritingBoard" src="/stickers/office/writing-board.svg" class="sticker" >}}

## Food


- {{< figure title="Apple" src="/stickers/food/apple.svg" class="sticker" >}}
- {{< figure title="Avocado" src="/stickers/food/avocado.svg" class="sticker" >}}
- {{< figure title="Banana" src="/stickers/food/banana.svg" class="sticker" >}}
- {{< figure title="Boxing" src="/stickers/food/boxing.svg" class="sticker" >}}
- {{< figure title="Cherry" src="/stickers/food/cherry.svg" class="sticker" >}}
- {{< figure title="Coffee" src="/stickers/food/coffee.svg" class="sticker" >}}
- {{< figure title="Dumbbel" src="/stickers/food/dumbbel.svg" class="sticker" >}}
- {{< figure title="Figure" src="/stickers/food/figure.svg" class="sticker" >}}
- {{< figure title="Fish" src="/stickers/food/fish.svg" class="sticker" >}}
- {{< figure title="Grape" src="/stickers/food/grape.svg" class="sticker" >}}
- {{< figure title="KiwiFruit" src="/stickers/food/kiwi-fruit.svg" class="sticker" >}}
- {{< figure title="Lemon" src="/stickers/food/lemon.svg" class="sticker" >}}
- {{< figure title="Milk" src="/stickers/food/milk.svg" class="sticker" >}}
- {{< figure title="Peach" src="/stickers/food/peach.svg" class="sticker" >}}
- {{< figure title="PoachedEggs" src="/stickers/food/poached-eggs.svg" class="sticker" >}}
- {{< figure title="Running" src="/stickers/food/running.svg" class="sticker" >}}
- {{< figure title="SodaWater" src="/stickers/food/soda-water.svg" class="sticker" >}}
- {{< figure title="Steak" src="/stickers/food/steak.svg" class="sticker" >}}
- {{< figure title="Watermelon" src="/stickers/food/watermelon.svg" class="sticker" >}}
- {{< figure title="WeighingScale" src="/stickers/food/weighing-scale.svg" class="sticker" >}}
- {{< figure title="Yogurt" src="/stickers/food/yogurt.svg" class="sticker" >}}

## Emotions
