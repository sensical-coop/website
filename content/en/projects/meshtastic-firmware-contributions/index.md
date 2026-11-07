---
title: "Meshtastic firmware: sensor support upstream"
seoTitle: "Our sensor contributions to the Meshtastic firmware | Sensical"
description: "Our pull requests merged into Meshtastic firmware: drivers for CO2, particulate matter, formaldehyde, analog and one-wire sensors, and more robust sensor reading."
draft: false
featured: true
weight: 2
translationKey: meshtasticcontributions
heroHeading: "Meshtastic firmware"
heroSubHeading: "Sensor support for LoRa mesh networks"
year: "2025–2026"
services:
- meshtasticsensorintegration
- environmentaldatacollection
labels:
- "Meshtastic"
- "Firmware"
- "Air quality"
image: "/images/projects/meshtastic/cover-sensors.png"
# The cover is a drawing on white: keep the plain black banner
heroImage: false
---

Since 2025 we have been bringing environmental sensors to [Meshtastic](https://meshtastic.org), the open-source firmware for LoRa mesh radios. The work so far includes more than **50 merged pull requests**, across different areas of the firmware.

## Sensor drivers

Each sensor needs a driver in the firmware and fields in Meshtastic's telemetry protocol, so that its readings can travel through the mesh, reach the apps and be _uplinked_ over MQTT. We have added to and reworked the _AirQualityTelemetry_ module with the following contributions:

+ **CO2**: Sensirion SCD4X and SCD30, with admin commands for their calibration
+ **Particulate matter and gases**: Sensirion SEN5X, and the SEN6X series with PM, temperature, humidity, CO2, formaldehyde and VOC and NOx indexes; Seeed Studio HM330X; and a rework of the Plantower PMSA003I
+ **Formaldehyde**: Sensirion SFA30
+ **Temperature and humidity**: the Sensirion SHT family, consolidated into a single driver
+ **Analog inputs**: Texas Instruments ADS1X15 converters, up to eight voltage channels
+ **One-wire probes**: up to eight DS18B20 temperature probes through DS2482 and DS2482-800 I2C bridges
+ **Soil and water**: telemetry fields for pH, conductivity, salinity, nitrogen, phosphorus, potassium, nitrate, ammonium, dissolved oxygen, redox potential, turbidity, oxygen demand and solar irradiance

{{< divider
    image="images/drawings/probe-drawing.svg"
    height="220"
    margin="60vw"
>}}

## Making sensors reliable

Adding a driver is only part of the job. A sensor that works on a desk has to keep working in the field, on every supported board and alongside the other devices it shares a bus with. That takes careful, often invisible work: respecting each sensor's start-up and measurement times, handling failed reads and devices that share an address, and testing on real hardware before a change goes upstream. We apply the same care to every sensor we bring to Meshtastic, so that its readings can be trusted.

## Check the code

All the work is public on GitHub: [the merged pull requests](https://github.com/search?q=org%3Ameshtastic+author%3Aoscgonfer+is%3Apr+is%3Amerged&type=pullrequests), in [meshtastic/firmware](https://github.com/meshtastic/firmware) and [meshtastic/protobufs](https://github.com/meshtastic/protobufs).
