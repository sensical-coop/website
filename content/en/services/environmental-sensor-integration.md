---
title: 'Environmental sensor integration'
seoTitle: "Environmental sensor integration and Meshtastic data | Sensical"
description: "Environmental sensor integration for research, public bodies, companies and manufacturers: firmware, mesh networks, calibration and data platforms."
draft: false
featured: true
weight: 1
heroHeading: 'Environmental sensor integration'
heroSubHeading: ''
section_title: 'Services'
translationKey: environmentaldatacollection
aliases:
- /work/environmental-data-collection/
- /services/environmental-data-collection/
labels:
- "Sensors"
- "Integration"
- "Mesh networks"
related_pages:
- meshtastic-sensor-integration
- co-creation
---

We integrate environmental sensors into flexible, affordable, and reliable data systems: from the sensor and its firmware, through the network that carries its data, to the platform where that data is stored, visualised and used. We are experts in sensor data collection over distributed, off-grid mesh networks, and we have long experience validating, calibrating and processing large datasets.

{{< divider
    image="images/drawings/probe-drawing.svg"
    height="220"
    margin="60vw"
>}}

{{< feature
    image="images/drawings/pm-sensor.svg"
    side="left"
    width="150"
    max-height="100"
    mobile="hide"
>}}

We have broad experience in environmental monitoring with affordable, open-source tools, especially for **air quality** and **agriculture**. We are an independent organisation that contributes to the [Smart Citizen](https://smartcitizen.me) and [Meshtastic](https://meshtastic.org) projects, and we work closely with research institutions, universities and companies to develop research-grade monitoring tools. We have also worked with biodiversity monitoring tools, such as camera traps and acoustic monitoring with BirdNET.
{{< /feature >}}

{{< alert type="bg-sensical" >}}

### In short

We develop tools for citizen science as well as for research-grade and industrial sensing. Our team has worked on numerous R&D projects, including EU Horizon and Erasmus+ projects, and on projects funded by national and local research programmes in Spain and Barcelona.
{{< /alert >}}

## Who we work with

Every sensor project starts from a different place, so we adapt the integration to the people who will use the data:

+ **Research institutions and universities**: research-grade deployments, with calibration, validation and publishable data
+ **Public bodies and cities**: affordable and open monitoring networks
+ **Companies and industry**: new sensors integrated into your products, sites or processes, with their data flowing into the systems you already use
+ **Sensor manufacturers and integrators**: LoRa mesh support for your devices, from firmware to a data platform for your customers, {{<accent>}}maintained as the protocol evolves{{</accent>}}
+ **Citizen science and community groups**: participatory sensing, from choosing the sensors to acting on the results

## Air quality on Mesh Networks

We were among the first to contribute air quality metrics to the telemetry modules of [Meshtastic](https://meshtastic.org), the open-source firmware for LoRa mesh networks.

That work brings environmental data to mesh networks: **particulate matter (PM), gases and CO2**, among other measurements. See our [Meshtastic sensor integration](/services/meshtastic-sensor-integration/) service and our [contributions to the Meshtastic firmware](/projects/meshtastic-firmware-contributions/).

{{< divider
    image="images/drawings/antenna-drawing.svg"
    height="100"
    margin="40vw"
>}}

## From the mesh to your data: Mesh Things

Collecting data over a mesh is only half the job. [Mesh Things](/projects/mesh-things/) is our open-source platform for Meshtastic sensor networks. It decrypts and decodes the mesh's traffic, stores every reading, calibrates and checks it, and raises alarms when a sensor goes quiet or a value goes out of range. It already stores the data of around 1,000 devices for [Mesh Hub UK](https://meshhub.uk/)'s community network.

We can run it for you at [things.sensical.es](https://things.sensical.es), deploy it on your own servers or on a Raspberry Pi in the field, or send the decoded readings over MQTT to the IoT platform you already use.

{{< alert type="border-sensical" >}}

### Beyond the sensors

We recognise that environmental monitoring involves much more than just sensors and technology, and as a collective with a diverse set of backgrounds and skillsets, we can support not just with sensor integration, but also with a range of complementary services. Whether it’s **training and documentation, design, or data analysis support**, we’re here to help with your entire environmental sensing project.
{{< /alert >}}

## What we offer

We can offer a wide range of products and services around environmental solutions including:
{{< feature
    image="images/drawings/electrochemical.svg"
    side="right"
    width="250"
    max-height="200"
    mobile="hide"
>}}

+ **Sensor integration**: hardware selection, firmware development, and new sensors added to existing devices, including LoRa mesh devices
+ **Field-proven hardware** for environmental data collection, including mesh devices
+ **A data platform with {{<accent>}}Mesh Things{{</accent>}}**: storage, processing, calibration, validation and alarms, hosted by us or on your own infrastructure
+ **Data where you need it**: decoded readings delivered to your own platform over MQTT, or through an API
+ Turnkey projects, from the first prototype to deployment
+ Maintenance as firmware and protocols evolve
+ Training and mentoring on all of the above

{{< /feature >}}

## Building it {{< accent >}}together{{< /accent >}}

We have particular experience working with researchers and citizen science groups to define research objectives, deploy sensors, analyse data and act on the results, and we work in a horizontal, participatory way. Read more about our methods on our [co-creation page](/services/co-creation/).

Tell us about your sensors or your network at [info@sensical.es](mailto:info@sensical.es).
