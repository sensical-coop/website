---
title: "Azul Petróleo: interactive light masks"
seoTitle: "Azul Petróleo: radio-controlled LED masks for dance | Sensical"
description: "Wearable light masks and stage LEDs for Iron Skulls Co's dance show Azul Petróleo, all cued live and wirelessly from the show's lighting software."
draft: false
featured: true
weight: 10
translationKey: azulpetroleomasks
heroHeading: "Azul Petróleo"
heroSubHeading: "Radio-controlled light masks for a contemporary dance show"
client: "Iron Skulls Co"
year: "2022–2023"
partners:
- "Vicente Romero (3D design)"
services:
- technicaldevelopmentartists
related_projects:
- famulus40
labels:
- "Wearables"
- "Radio"
- "LEDs"
image: "/images/projects/azul-petroleo/mask-crush.jpg"
---

For [Iron Skulls Co](https://www.ironskulls.es/)'s show [Azul Petróleo](https://ironskulls.es/creaciones/azul-petroleo/), we designed the electronics and code for a set of wearable masks that light up on cue, and for the LED strips that form part of the stage design. Both are controlled live from the show's lighting software. The project was led by [Óscar González](/about/#oscar-gonzalez), co-founder of Sensical and technical director at Iron Skulls Co.

{{< carousel label="Azul Petróleo masks" >}}
![Three dancers on a dark stage, two of them wearing masks with glowing red lights](/images/projects/azul-petroleo/mask-crush.jpg "Azul Petróleo on stage.")
![An example of a 3D-printed mask, with red LED strips glowing along its horns, eyes and jaw](/images/projects/azul-petroleo/mask.jpg "One of the masks, with its addressable RGB LEDs lit.")
![The masks lined up in the dark, lit in blue, one with red and orange lights](/images/projects/azul-petroleo/masks.jpg "The masks together. Each one has its own address on the radio network.")
![A dancer in the dark, a red laser beam coming out of their mask and two white lights shining from above](/images/projects/azul-petroleo/mask-features.jpg "The laser and the two high-power white LEDs.")
{{< /carousel >}}

## The show

Azul Petróleo explores individuality, collective instincts and the role of technology in society. During the show, four dancers wear masks with different lighting systems: lasers, high-power LEDs and addressable RGB LEDs. Dance and light work together in a complex visual choreography, with every technical element synchronised from a single control point.

## The masks

The masks were designed by [Vicente Romero](mailto:info@vicenteromero.es). We adapted them for 3D printing, so that they hold the electronics securely while the dancers move. Each mask is printed in two halves, joined with screws and threaded inserts, and contains:

+ 45 addressable RGB LEDs (144 LEDs/m)
+ 2 very high-power white LEDs
+ 1 laser, dimmed with PWM
+ A Feather M0 board with an RFM69 433 MHz radio and an external antenna for range
+ A custom shield and a 2,000 mAh LiPo battery, charged over USB: more than six hours in a show, or about one hour with every light on at once

## Wireless control

Each mask runs a small radio server with its own address. A client board, connected to the lighting computer, receives [OSC](https://opensoundcontrol.stanford.edu/) messages from [the show's lighting software](https://www.getdlight.com) and relays them to the masks over the air, using a custom protocol built on [RadioHead](http://www.airspayce.com/mikem/arduino/RadioHead/).

Server and client are asynchronous, so a cue can be sent at any time and the masks react immediately. Animations are stored on each mask and triggered by cue, for the RGB LEDs, the high-power LEDs and the laser.

## Stage LEDs

Besides the masks, we built a set of custom addressable LED strips for the stage, mounted on 50 cm bars. They are controlled remotely over sACN (E1.31) and run asynchronously, and we wrote a second piece of software to sequence them. The bars are daisy-chained, and custom configurations can drive hundreds of metres of LEDs.

![Three dancers on a dark stage, with two red LED bars glowing behind them](/images/projects/azul-petroleo/mask-crush.jpg "The stage LED bars, behind the dancers.")

## Results

Azul Petróleo was first presented in 2022 at LAVA (Valladolid), Teatros del Canal (Madrid) and Summer Dance Forever (Amsterdam). It has toured internationally since.

{{< youtube id="P9CsZFBkOrY" loading="lazy" title="Azul Petróleo by Iron Skulls Co (video)" >}}

## Open source

All the code and hardware are published under the GPL-3.0 licence:

+ [iron-skulls-mask](https://github.com/oscgonfer/iron-skulls-mask): 3D models (STL), shield PCB and bill of materials, mask firmware, radio client and OSC bridge
+ [iron-skulls-leds](https://github.com/oscgonfer/iron-skulls-leds): OSC-to-sACN sequencer and Teensy firmware for the stage LEDs
