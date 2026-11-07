---
title: 'Meshtastic sensor integration'
seoTitle: "Meshtastic sensor integration and firmware development | Sensical"
description: "We bring sensors to Meshtastic: firmware drivers merged upstream, telemetry definitions, reliable I2C and power handling, and a data platform for the readings."
draft: false
featured: true
weight: 2
heroHeading: 'Meshtastic sensor integration'
heroSubHeading: ''
section_title: 'Services'
translationKey: meshtasticsensorintegration
labels:
- "Meshtastic"
- "Firmware"
- "Sensors"
related_pages:
- environmental-sensor-integration
---

We are proud contributors to the [Meshtastic](https://meshtastic.org) firmware, the open-source firmware that turns affordable LoRa radios into off-grid mesh networks, bringing field-tested solutions to the open-source ecosystem. Our team has made substantial contributions to the official firmware to bring sensor drivers {{< accent >}} into the official firmware{{< /accent >}}, and make sure the data reaches its destination with the best quality. We can support integrate your sensors into standard Meshtastic devices and keep working release after release.

{{< alert type="bg-sensical" >}}

### Why Meshtastic

LoRa mesh networks are gaining in popularity as they need no towers, SIM cards or complex subscriptions. In LoRa Mesh, each radio relays its neighbours' messages, and a few gateways can connect a whole farm, valley or neighbourhood. It has a large community and a growing range of hardware. That makes it a strong option for environmental monitoring where power and coverage are scarce, as long as the sensors are supported in the firmware, and supported well.

{{</alert>}}

## Our track record

Since 2025, 48 of our pull requests have been merged into Meshtastic's firmware, protocol definitions and libraries. They add sensors for CO2, particulate matter, formaldehyde, VOC and NOx, temperature and humidity, analog inputs and one-wire probes, and they make sensor reading more robust on every device. Read the details in our [Meshtastic firmware contributions](/projects/meshtastic-firmware-contributions/).

{{< divider
    image="images/drawings/antenna-drawing.svg"
    height="100"
    margin="40vw"
>}}

## Who it is for

+ **Sensor manufacturers** who want their sensor or device to be supported in Meshtastic, out of the box.
+ **Integrators and device makers** building Meshtastic hardware with environmental sensors.
+ **Research teams, public bodies and companies** deploying sensor networks that must run off-grid, with data they can trust.

## Our offer

+ Firmware drivers for new sensors
+ Telemetry definitions in Meshtastic's protocol, so your readings travel through the mesh, apps and MQTT with their proper units
+ Robust integration: I2C bus speeds and addresses, sleep and wake cycles, reading intervals, calibration and admin commands
+ Custom firmware builds and presets for your device, and testing on real hardware
+ The data side with [Mesh Things](/projects/mesh-things/): storage, processing, alarms, or decoded data delivered to your own platform
+ Maintenance as Meshtastic evolves, so your integration does not break with new releases

{{< alert type="border-sensical" >}}

### We don't do this alone

We contribute our work to the official firmware wherever we can. Your sensor then becomes part of Meshtastic itself, reviewed by its maintainers and available to everyone, instead of a singled out fork.

{{< /alert >}}

## Get in touch

Tell us about your sensor or your network at [info@sensical.es](mailto:info@sensical.es). For the wider picture, from sensor selection to calibration and deployment, see our [environmental sensor integration](/services/environmental-sensor-integration/) service.
