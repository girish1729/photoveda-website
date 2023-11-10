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



## Bathroom

{{< rawhtml >}}
<div class="grid gap-x-6 md:grid-cols-4 lg:grid-cols-4 xl:gap-x-12">
<div>
{{< /rawhtml >}}

- {{< figure title="Body wash" src="/stickers/bathroom/body-wash.svg" class="sticker" >}}

- {{< figure title="Comb" src="/stickers/bathroom/comb.svg" class="sticker" >}}
- {{< figure title="GarbageCan" src="/stickers/bathroom/garbage-can.svg" class="sticker" >}}
- {{< figure title="HairDryer" src="/stickers/bathroom/hair-dryer.svg" class="sticker" >}}
- {{< figure title="LaundryDetergent" src="/stickers/bathroom/laundry-detergent.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}
- {{< figure title="Mirror" src="/stickers/bathroom/mirror.svg" class="sticker" >}}
- {{< figure title="MouthwashCup" src="/stickers/bathroom/mouthwash-cup.svg" class="sticker" >}}
- {{< figure title="Razor" src="/stickers/bathroom/razor.svg" class="sticker" >}}
- {{< figure title="Sink" src="/stickers/bathroom/sink.svg" class="sticker" >}}
- {{< figure title="Soap" src="/stickers/bathroom/soap.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="ToiletPaper" src="/stickers/bathroom/toilet-paper.svg" class="sticker" >}}
- {{< figure title="ToiletSuction" src="/stickers/bathroom/toilet-suction.svg" class="sticker" >}}
- {{< figure title="Toilet" src="/stickers/bathroom/toilet.svg" class="sticker" >}}
- {{< figure title="Toothbrush" src="/stickers/bathroom/toothbrush.svg" class="sticker" >}}
- {{< figure title="Detergent" src="/stickers/bathroom/detergent.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="Toothpaste" src="/stickers/bathroom/toothpaste.svg" class="sticker" >}}
- {{< figure title="Towel" src="/stickers/bathroom/towel.svg" class="sticker" >}}
- {{< figure title="Tub" src="/stickers/bathroom/tub.svg" class="sticker" >}}
- {{< figure title="WashingMachine" src="/stickers/bathroom/washing-machine.svg" class="sticker" >}}
- {{< figure title="Duck" src="/stickers/bathroom/duck.svg" class="sticker" >}}

{{< rawhtml >}}
</div>
</div>
{{< /rawhtml >}}

## Business


{{< rawhtml >}}
<div class="grid gap-x-6 md:grid-cols-4 lg:grid-cols-4 xl:gap-x-12">
<div>
{{< /rawhtml >}}

- {{< figure title="AdhesiveStrip" src="/stickers/office/adhesive-strip.svg" class="sticker" >}}
- {{< figure title="Analyze" src="/stickers/office/analyze.svg" class="sticker" >}}
- {{< figure title="Bookshelf" src="/stickers/office/bookshelf.svg" class="sticker" >}}
- {{< figure title="Briefcase" src="/stickers/office/briefcase.svg" class="sticker" >}}
- {{< figure title="BusinessCard" src="/stickers/office/business-card.svg" class="sticker" >}}
- {{< figure title="Calculator" src="/stickers/office/calculator.svg" class="sticker" >}}
- {{< figure title="Clock" src="/stickers/office/clock.svg" class="sticker" >}}
- {{< figure title="CorrectionTape" src="/stickers/office/correction-tape.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="Data" src="/stickers/office/data.svg" class="sticker" >}}
- {{< figure title="DeskLamp" src="/stickers/office/desk-lamp.svg" class="sticker" >}}
- {{< figure title="Folder" src="/stickers/office/folder.svg" class="sticker" >}}
- {{< figure title="Indicator" src="/stickers/office/indicator.svg" class="sticker" >}}
- {{< figure title="Introduce" src="/stickers/office/introduce.svg" class="sticker" >}}
- {{< figure title="Medal" src="/stickers/office/medal.svg" class="sticker" >}}
- {{< figure title="Mouse" src="/stickers/office/mouse.svg" class="sticker" >}}
- {{< figure title="Notebook" src="/stickers/office/notebook.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="Office" src="/stickers/office/office.svg" class="sticker" >}}
- {{< figure title="Order" src="/stickers/office/order.svg" class="sticker" >}}
- {{< figure title="PencilSharpener" src="/stickers/office/pencil-sharpener.svg" class="sticker" >}}
- {{< figure title="DataBuried" src="/stickers/office/data-buried.svg" class="sticker" >}}
- {{< figure title="Pen" src="/stickers/office/pen.svg" class="sticker" >}}
- {{< figure title="PieChart" src="/stickers/office/pie-chart.svg" class="sticker" >}}
- {{< figure title="Planning" src="/stickers/office/planning.svg" class="sticker" >}}
- {{< figure title="Printer" src="/stickers/office/printer.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="Project" src="/stickers/office/project.svg" class="sticker" >}}
- {{< figure title="Report" src="/stickers/office/report.svg" class="sticker" >}}
- {{< figure title="Scissors" src="/stickers/office/scissors.svg" class="sticker" >}}
- {{< figure title="Stapler" src="/stickers/office/stapler.svg" class="sticker" >}}
- {{< figure title="Statistics" src="/stickers/office/statistics.svg" class="sticker" >}}
- {{< figure title="Telephone" src="/stickers/office/telephone.svg" class="sticker" >}}
- {{< figure title="WritingBoard" src="/stickers/office/writing-board.svg" class="sticker" >}}
- {{< figure title="OfficeChair" src="/stickers/office/office-chair.svg" class="sticker" >}}

{{< rawhtml >}}
</div>
</div>
{{< /rawhtml >}}

## Food

{{< rawhtml >}}
<div class="grid gap-x-6 md:grid-cols-4 lg:grid-cols-4 xl:gap-x-12">
<div>
{{< /rawhtml >}}

- {{< figure title="Apple" src="/stickers/food/apple.svg" class="sticker" >}}
- {{< figure title="Avocado" src="/stickers/food/avocado.svg" class="sticker" >}}
- {{< figure title="Banana" src="/stickers/food/banana.svg" class="sticker" >}}
- {{< figure title="Dumbbel" src="/stickers/food/dumbbel.svg" class="sticker" >}}
- {{< figure title="Figure" src="/stickers/food/figure.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="Grape" src="/stickers/food/grape.svg" class="sticker" >}}
- {{< figure title="KiwiFruit" src="/stickers/food/kiwi-fruit.svg" class="sticker" >}}
- {{< figure title="Lemon" src="/stickers/food/lemon.svg" class="sticker" >}}
- {{< figure title="Milk" src="/stickers/food/milk.svg" class="sticker" >}}
- {{< figure title="Fish" src="/stickers/food/fish.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="Peach" src="/stickers/food/peach.svg" class="sticker" >}}
- {{< figure title="PoachedEggs" src="/stickers/food/poached-eggs.svg" class="sticker" >}}
- {{< figure title="Running" src="/stickers/food/running.svg" class="sticker" >}}
- {{< figure title="Yogurt" src="/stickers/food/yogurt.svg" class="sticker" >}}
- {{< figure title="Cherry" src="/stickers/food/cherry.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="SodaWater" src="/stickers/food/soda-water.svg" class="sticker" >}}
- {{< figure title="Steak" src="/stickers/food/steak.svg" class="sticker" >}}
- {{< figure title="Watermelon" src="/stickers/food/watermelon.svg" class="sticker" >}}
- {{< figure title="WeighingScale" src="/stickers/food/weighing-scale.svg" class="sticker" >}}
- {{< figure title="Boxing" src="/stickers/food/boxing.svg" class="sticker" >}}
- {{< figure title="Coffee" src="/stickers/food/coffee.svg" class="sticker" >}}

{{< rawhtml >}}
</div>
</div>
{{< /rawhtml >}}


## Emotions

{{< rawhtml >}}
<div class="grid gap-x-6 md:grid-cols-4 lg:grid-cols-4 xl:gap-x-12">
<div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/emotions/angry-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/arrogant-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/astonished-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/blushing-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/confused-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/crying-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/dizzy-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/emoji.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/emotions/exclamation-head.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/flushed-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/happy-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/injury-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/in-love-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/kiss-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/money-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/nerd-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/shocked-emoji.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/emotions/sleeping-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/sleepy-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/cool-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/cry-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/smart-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/smile-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/smiling-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/smirking-emoji.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/emotions/surprised-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/suspicious-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/thinking-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/tongue-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/unamused-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/vain-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/vomiting-emoji.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/emotions/wink-emoji.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  </div>
{{< /rawhtml >}}

## Health

{{< rawhtml >}}
<div class="grid gap-x-6 md:grid-cols-5 lg:grid-cols-5 xl:gap-x-12">
<div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/health/aid-emergency-first-health-healthcare-hospital.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/ambulance-emergency-health-healthcare-hospital-medical.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/awareness-cancer-emergency-health-healthcare-medical.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/bacteria-emergency-health-healthcare-hospital-medical.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/bandage-emergency-health-healthcare-medical-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/blood-cell-health-healthcare-hospital-medical-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/blood-emergency-health-healthcare-hospital-medical.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/blood-emergency-health-healthcare-medical-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/bone-health-healthcare-medical-medicine-2.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/bone-health-healthcare-medical-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/cardiograph-emergency-health-healthcare-medical-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/care-doctor-health-healthcare-history-hospital.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/care-emergency-health-hospital-mask-medical.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/checkup-doctor-health-healthcare-hospital-medical.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/electrocardiogram-health-clinic.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/health/emergency-call-health-healthcare-medical-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/emergency-health-healthcare-hospital-kit-medical.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/emergency-health-healthcare-hospital-medical-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/emergency-health-healthcare-infusion-medical-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/emergency-health-healthcare-kidney-medical-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/emergency-health-healthcare-liver-medical-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/emergency-health-healthcare-medical-medicine-microscope.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/emergency-health-healthcare-medical-medicine-mortar.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/emergency-health-healthcare-medical-medicine-pharmacy.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/genetic-health-healthcare-medical-medicine-pharmacy.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/heal.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/health-care-accident.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/health-care-blood.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/health-care-diet.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/healthcare-hospital-medical-23.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/health/coronavirus-vaccine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/covid-19.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/danger-health-healthcare-medical-medicine-radiation.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/dental-implant-health-healthcare-medical-medicine-pharmacy.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/doctor-health-healthcare-hospital-medical-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/health-clinic-health-care.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/health-clinic-medical.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/health-clinic-pharmacy.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/health-clinic-syringe.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/health-first-weight-scale.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/health-healthcare-hospital-injection-medical-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/health-healthcare-hospital-medic-medical-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/health-healthcare-medical-medicine-secure-security.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/health-health-symbol-healthcare-medical-medicine-pharmacy.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/health/drug-health-healthcare-hospital-medical-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/healthcare-hospital-medical-31.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/health-care-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/health-worker-light-skin-tone.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/health-worker-medium-skin-tone.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/health-worker.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/heart-like.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/herb.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/hospital-medical.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/hospital.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/hygienic-dentist.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/medicine-healthcare-and-medical.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/medicine-veterinarian.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/mineral-ice-cubes.svg" class="sticker" >}}

- {{< figure title="" src="/stickers/health/visibility-eye.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/health/mortar-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/pills-medicine.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/smartphone-cardiogram.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/syringe-doctor.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/toothpaste-health-care.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/vision-ophthalmology.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/vitamins-fruit.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/vitamins.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/vitamins-vitamin.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/water-bottle.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/medical-history-doctor.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/medical-history-paper.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/medical-symbol.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/health/medicine-book-book.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  </div>
{{< /rawhtml >}}

## Transport

{{< rawhtml >}}
<div class="grid gap-x-6 md:grid-cols-5 lg:grid-cols-5 xl:gap-x-12">
<div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/transport/airplane-plane.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/and-cargo-delivery.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/bus-transport.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/cab-car-taxi.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/cable-car-cabin-transport.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/transport/cargo-factory-illustration.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/car-transport.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/crane-transport.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/delivery-transport.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/water-transportation.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/transport/truck-transport.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/delivery-truck-truck.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/ferry.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/gas-station-transportation.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/ground-transportation.svg" class="sticker" >}}


{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/transport/monorail.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/school-bus.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/tram-car.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/transportation-cars.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/trolleybus.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/transport/transportation-car.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/transportation-farm.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/transportation-ship.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/transportation.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/transport/transportation-truck.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  </div>
{{< /rawhtml >}}

## Sports


{{< rawhtml >}}
<div class="grid gap-x-6 md:grid-cols-5 lg:grid-cols-5 xl:gap-x-12">
<div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/sports/american-football-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/baseball-team-sports.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/beach-ball-ball.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/bowling-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/bowling.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/car-christmas-transport.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/darts-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/dumbbell-dumbbells.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/dumbbell-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/exercise-gym.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/sports/football-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/gambler-bet.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/gambler-target.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/hockey-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/jet-ski-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/jumping-rope-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/lift.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/man-playing-handball.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/man-playing-water-polo.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/medal-champion.svg" class="sticker" >}}

- {{< figure title="" src="/stickers/sports/flip-flops-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/no-bicycles.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/sports/oars-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/oxygen-tank-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/person-lifting-weights-medium-dark-skin-tone.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/person-playing-water-polo-medium-dark-skin-tone.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/quarters-white-blue-football-shirt.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/queen-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/ride.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/rings-gym.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/roller-skate-sports-and-competition.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/sports/motorbike-transportation.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/skier.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/skipping-rope-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/snorkel-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/snow-boarding-fun-sport.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/snowboard-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/sports-balls.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/sports-ball.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/sports-bowling.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/sports-helmet.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/sports-medal.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/sports/skier-medium-light-skin-tone.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/sports-mode.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/sports.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/tennis.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/trophy-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/trunk.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/volleyball-net-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/volleyball-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/watches-clock.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/woman-playing-handball-medium-light-skin-tone.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/sports/yoga-ball-sports-and-competition.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  </div>
{{< /rawhtml >}}

## Misc

{{< rawhtml >}}
<div class="grid gap-x-6 md:grid-cols-4 lg:grid-cols-4 xl:gap-x-12">
<div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/misc/battery-battery-level.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/misc/binoculars-search-view-vision-zoom.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/misc/cheer.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/misc/devices-monitor.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/misc/hand-hands-and-gestures.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/misc/plain-yellow-football-shirt.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/misc/helmet-sports-and-competition.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/misc/helmet.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  <div>
{{< /rawhtml >}}

- {{< figure title="" src="/stickers/misc/heart-shapes.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/misc/heart-with-arrow.svg" class="sticker" >}}
- {{< figure title="" src="/stickers/misc/sunglasses-eyeglasses.svg" class="sticker" >}}

{{< rawhtml >}}
  </div>
  </div>
{{< /rawhtml >}}
